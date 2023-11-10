/*
type TypeKeys = 'id' | 'content' | 'completed'
type TypeValues = number | string | boolean
// 限制toDo可以有哪些属性
type TypeTodoKey = {
    [key in TypeKeys]: any
}
// 限制属性的具体类型
type TypeTodo = TypeTodoKey & {
    id: number,
    content: string,
    completed: boolean
}

const toDo: TypeTodo = {
    id: 1,
    content: "",
    completed: false
}

function setToDo(key: 'id', value: number): void
function setToDo(key: 'content', value: string): void
function setToDo(key: 'completed', value: boolean): void

function setToDo(key: TypeKeys, value: TypeValues) {
    toDo[key] = value
}
*/