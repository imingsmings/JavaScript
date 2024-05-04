export default class ProductReview {
    private _name: string
    private _review: string

    constructor(name: string, review: string) {
        this._name = name
        this._review = review
    }

    get name(): string {
        return this._name
    }

    get review(): string {
        return this._review
    }
}
