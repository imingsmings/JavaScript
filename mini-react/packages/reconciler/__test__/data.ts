import { REACT_ELEMENT_TYPE } from 'shared'

export const SINGLE_ELMENT = {
  $$typeof: REACT_ELEMENT_TYPE,
  type: 'div',
  key: null,
  props: {
    children: {
      $$typeof: REACT_ELEMENT_TYPE,
      type: 'p',
      key: null,
      props: {
        children: 'hello'
      },
      ref: null
    }
  },
  ref: null
}

export const MULTIPLE_ELEMENTS = {
  $$typeof: REACT_ELEMENT_TYPE,
  type: 'div',
  key: null,
  props: {
    id: 'container',
    children: [
      {
        $$typeof: REACT_ELEMENT_TYPE,
        type: 'h1',
        key: null,
        props: {
          id: 'title',
          children: 'Hello,my react!!!'
        },
        ref: null
      },
      {
        $$typeof: REACT_ELEMENT_TYPE,
        type: 'p',
        key: null,
        props: {
          id: 'title2',
          children: [
            '123',
            {
              $$typeof: REACT_ELEMENT_TYPE,
              type: 'span',
              key: null,
              props: {
                children: 'span text'
              },
              ref: null
            }
          ]
        },
        ref: null
      }
    ]
  },
  ref: null
}
