/// <reference types="single-spa" />

declare module '*.js' {
  import { LifeCycles } from 'single-spa'
  const lifecycles: Omit<LifeCycles, 'update'>
  export = lifecycles
}
