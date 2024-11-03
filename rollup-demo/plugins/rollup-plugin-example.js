// rollup-plugin-example.js

export default function myExample() {
    return {
        name: 'my-example',
        options(options) {
            console.log('options:', options)
        },
        buildStart(options) {
            console.log('buildStart:', options)
        },
        resolveId(source, importer) {
            console.log('resolveId(source):', source)
            console.log('resolveId(importer):', importer)
            return null
        },
        load(id) {
            console.log('id:', id)
            return null
        },
        transform(code, id) {
            console.log('transform')
            console.log('---', code)
            console.log('---', id)
        },
        moduleParsed(info) {
            console.log('moduleParsed:', info)
        },
        buildEnd() {
            console.log('buildEnd')
        }
    }
}
