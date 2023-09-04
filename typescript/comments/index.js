// // @ts-check

// let isCheck = false;

// // Type 'number' is not assignable to type 'boolean'.
// isCheck = 1

// // @ts-nocheck

// let isCheck = false;
// isCheck = 1;

/**
 * 
 * @param {string} user 
 */
function sayHello(user) {

}

/**
 * @type {string | number}
 */
var s;

/**
 * @type {Window}
 */
var win;

/**
 * @type {Promise<number>}
 */
var promiseNumber;

/**
 * @type {HTMLElement}
 */
var ele = document.getElementById('#root');

/**
 * @type {import('./types.d.ts').Pet}
 */
var p;

/**
 * @typedef {import('./types').Pet} Pet
 */
/**
 * @type {Pet}
 */
var p1

/**
 * @typedef {(number | string)} NumberLike
 */

/**
 * @type { NumberLike }
 */
var numberOrString;

/**
 * @param {string}  x
 * @returns {void}
 */
function foo(x) {}

/**
 * @param {string}  [x]
 * @returns {boolean}
 */
function foo(x) {}

/**
 * @param {string}  [x='100']
 */
function foo(x) {}