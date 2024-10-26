import * as esbuild from 'esbuild'

const code = `
  interface User{
    name: string;
    age: number;
  }
  let x: number = 1;
  const getUserInfo = (user: User) => {
    console.log(user.name);
    console.log(user.age);
  }
  getUserInfo({name: 'jack', age: 18});
`

const result = await esbuild.transform(code, {
    loader: 'ts'
})
console.log(result)
