import { getSearchObj } from '../ts/utils/tools'
import 'jest-location-mock'

describe('Test getSearchObj', () => {
    test('with search string', () => {
        // window.location.href = "https://www.baidu.com?a=1&b=2";
        window.location.assign(
            'https://www.baidu.com?a=1&b=2'
        )
        const result = getSearchObj()
        expect(result).toEqual({
            a: '1',
            b: '2'
        })
        expect(window.location.search).toBe('?a=1&b=2')
    })

    test('no search string', () => {
        window.location.assign('https://www.baidu.com')
        const result = getSearchObj()
        expect(result).toEqual({})
        expect(window.location.search).toBe('')
    })
})
