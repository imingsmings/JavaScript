// interface UserInfo {
//     name: string;
//     email: string;
//     age: number;
// }

// // 'name' | 'email' | 'age'
// type UserInfoKeys = keyof UserInfo; 

type Arrayish = { [n: number]: unknown };
type A = keyof Arrayish;

type Mapish = { [k: string]: boolean };
type M = keyof Mapish;