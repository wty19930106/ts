// function addNum(arg1: number, arg2: number): number {
//     return arg1 + arg2
// }

// const addNum2 = (arg1: number, arg2: number) => arg1 + arg2

let addNum: (x: number, y: number) => number
addNum = (arg1: number, arg2: number): number => arg1 + arg2
addNum = (arg1: number, arg2: number) => arg1 + arg2
type Add = (x: number , y: number) => number
// type isString = string

// type AddFunction = (arg1: number , arg2: number , arg3?: number ) => number
// let addFunction: AddFunction
// addFunction = (x: number, y: number ) => x + y
// addFunction = (x: number, y: number, z: number ) => x + y + z
// const addFunctions = (x: number , y: number = 3) => x + y

// function handleData () {
//     if (arguments.length === 1) {  return arguments[0] * 2 }
//     else if (arguments.length ===2) {  return arguments[0] * arguments[1] }
//     else { return Array.prototype.slice.apply(arguments).join('_') }
// }

// const handleData = (arg1: number , ...args: number[]) => {
//     // ...
// }

// 函数重载
function handleData(x: string): string
function handleData(x: number): number
function handleData(x: any): any {
    if (typeof x === 'string') {
        return x.split('')
    } else {
        return x.toString().split('').map((item) => Number(item))
    }
}
// console.log(handleData('abc'))
// console.log(handleData(123)
