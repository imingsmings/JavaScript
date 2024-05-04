import ProductReview from './productReview'

export default class ReviewCollector {
    private _reviewList: ProductReview[]
    private _productList: string[]

    constructor() {
        this._reviewList = []
        this._productList = []
    }

    public addReview(productReview: ProductReview): void {
        this.reviewList.push(productReview)

        let found: boolean = false

        for (let i = 0; i < this.productList.length; i++) {
            if (
                this.productList[i] === productReview.name
            ) {
                found = true
                break
            }
        }

        if (!found) {
            this.productList.push(productReview.name)
        }
    }

    public getNumGoodReview(productName: string): number {
        let numGoodReviews = 0

        for (let i = 0; i < this.reviewList.length; i++) {
            if (this.reviewList[i].name === productName) {
                let review = this.reviewList[i].review
                if (review.includes('Good')) {
                    numGoodReviews++
                }
            }
        }

        return numGoodReviews
    }

    get productList() {
        return this._productList
    }

    get reviewList() {
        return this._reviewList
    }
}
