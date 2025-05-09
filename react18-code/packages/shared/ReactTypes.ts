export type Props = {
    [key: string]: any
    children?: any
}
export type ElementType = any
export type Key = string | null
export type Ref = { current: any } | ((instance: any) => void) | null

export interface ReactElement {
    $$typeof: symbol | number
    type: ElementType
    key: Key
    props: Props
    ref: Ref
    __mark: 'React Code'
}

export type Action<State> = State | ((prevSatate: State) => State)
