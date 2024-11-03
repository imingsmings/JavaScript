import {
    createFilter,
    dataToEsm
} from '@rollup/pluginutils'
import path from 'node:path'

export default function customJsonPlugin(options) {
    const filter = createFilter(
        options.include,
        options.exclude
    )
    return {
        name: 'rollup-plugin-json',
        version: '1.0.0',
        transform: {
            order: 'pre',
            handler(code, id) {
                if (
                    !filter(id) ||
                    path.extname(id) !== '.json'
                )
                    return null
                try {
                    const parse = JSON.parse(code)

                    return {
                        code: dataToEsm(parse),
                        map: { mappings: '' }
                    }
                } catch (err) {
                    const message =
                        'Could not parse JSON file'
                    this.error({ message, id, cause: err })
                    return null
                }
            }
        }
    }
}
