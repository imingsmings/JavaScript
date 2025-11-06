declare namespace JSX {
  interface Element {
    $$typeof: symbol
    type: any
    key: string | null
    props: any
    ref: any
  }
  interface IntrinsicElements {
    div: any
    p: any
    span: any
    h1: any
    h2: any
  }
}
