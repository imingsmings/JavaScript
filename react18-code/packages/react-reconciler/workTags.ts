export type WorkTag =
    | typeof FunctionComponent
    | typeof HostRoot
    | typeof HostComponent
    | typeof HostText

// 函数组件
export const FunctionComponent = 0

// 根元素
export const HostRoot = 3

// 基本DOM元素
export const HostComponent = 5

// 文本节点
export const HostText = 6
