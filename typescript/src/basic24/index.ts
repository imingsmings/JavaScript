// interface ITodoProps<T> {
//     id: number;
//     content: T;
//     completed: boolean;
// }

// interface ITodo<T> {
//     get(): ITodoProps<T>;
//     create(): string;
// }

// class Todo<T> implements ITodo<T> {
//     constructor (
//         private id: number,
//         private content: T,
//         private completed: boolean
//     ){}

//     create(): string {
//     }

//     get() {
//         return {
//             id: this.id,
//             content: this.content,
//             completed: this.completed,
//         }
//     }
// }