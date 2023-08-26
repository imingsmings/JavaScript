### [let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let) 与快级作用域

ES6 新增的声明变量的方式

1. let 同一作用域下不可重复声明

- 全局作用域
- 函数作用域,其中形参与声明

2. let 预编译时不会进行初始化

- 产生暂时性死区(TDZ):代码开始到声明之前
- 声明之前访问变量
- 函数参数空间可能产生

3. let 只会在当前的块级作用域内生效
4. 不建议在块级作用域当中使用函数声明的方式声明函数,而是用函数表达式的方式
5. 块级作用域没有返回值
6. 函数声明会提升到当前作用域的顶端,不会越级提升

### for 与 let

- for 循环中有两个块级作用域
- for()中作用域可看做{}的父级作用域
- let 本质上就是为 JS 增加一个块级作用域

### [const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)

ES6 新增的定义常量的方式

1. 一旦定义必须初始化,且不可改变
2. 会产生块级作用域,不会被预解析,有暂时性死区
3. 不允许被重复声明
4. 若保存引用值,则不能改变其引用

### 顶层对象

- 浏览器环境 window
- Node 环境 global

### 解构

ES6 新增的语法特征,一种赋值的过程。通过模式匹配(结构化赋值)的方式进行赋值。

### 箭头函数

- 不是用 function 关键字来定义的
- this 取决于父级作用域的 this
- 不能够作为构造函数使用
- 没有 arguments,使用拓展运算符代替
- yield 不生效

### 不定参数

rest 运算符、拓展运算符、展开运算符
