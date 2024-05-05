import ReviewCollector from '../src/class/reviewCollector'
import ProductReview from '../src/class/productReview'

jest.mock('../src/class/productReview', () => {
    return jest
        .fn()
        .mockImplementation(
            (name: string, review: string) => {
                return {
                    name,
                    review
                }
            }
        )
})

describe('Test ReviewCollector', () => {
    let collector: ReviewCollector

    beforeEach(() => {
        collector = new ReviewCollector()
    })

    test('Add a review', () => {
        const review = new ProductReview(
            'Product A',
            'Good'
        )
        collector.addReview(review)

        expect(
            collector.getNumGoodReview('Product A')
        ).toBe(1)
        expect(collector.productList).toContain('Product A')
    })

    test('Get good review', () => {
        const review1 = new ProductReview(
            'Product A',
            'Bad'
        )
        const review2 = new ProductReview(
            'Product A',
            'Good'
        )
        const review3 = new ProductReview(
            'Product B',
            'Good'
        )

        collector.addReview(review1)
        collector.addReview(review2)
        collector.addReview(review3)

        expect(
            collector.getNumGoodReview('Product A')
        ).toBe(1)
        expect(
            collector.getNumGoodReview('Product B')
        ).toBe(1)
    })
})

const ReviewCollectorMock = jest
    .spyOn(ReviewCollector.prototype, 'logReview')
    .mockImplementation(() => 'Loged Review')

test('Test methods', () => {
    const collector = new ReviewCollector()
    const review = new ProductReview('Product A', 'Good')
    collector.addReview(review)

    collector.logReview()
    expect(ReviewCollectorMock).toHaveBeenCalledTimes(1)
})

const ReviewCollectorStaticMock = jest
    .spyOn(ReviewCollector, 'showInfo')
    .mockImplementation(() => 'Static method')

test('Test static methods', () => {
    const result = ReviewCollector.showInfo()
    expect(ReviewCollectorStaticMock).toHaveBeenCalled()
    expect(result).toBe('Static method')
})

const ReviewCollectorSetterGetterMock = jest.spyOn(
    ReviewCollector.prototype,
    'productList',
    'get'
)

test('Test getter', () => {
    const collector = new ReviewCollector()
    const review = new ProductReview('Product A', 'Good')
    collector.addReview(review)
    expect(
        ReviewCollectorSetterGetterMock
    ).toHaveBeenCalled()
    expect(collector.productList).toEqual(['Product A'])
})
