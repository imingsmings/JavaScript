export interface APIResponseType {
    status: number,
    type: string,
    data: object
}

export interface APIRequestType {
    url: string,
    method: string,
    data: object
}