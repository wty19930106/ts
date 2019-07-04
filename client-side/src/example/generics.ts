// 泛型

// const getArray = <T>(value: T, times: number= 5): T[] => {
//     return new Array(times).fill(value)
// }

// console.log(getArray('abc', 4).map((item) => item.length))
// console.log(getArray<number>(123, 4).map((item) => item.toFixed()))

// const getArray = <T, U>(param1: T, param2: U, times: number): Array<[T, U]> => {
//     return new Array(times).fill([param1, param2])
// }
// getArray<number, string>(1, 'a', 3).forEach((item) => {
//     console.log(item[0]);
//     console.log(item[1]);

// })

// let getArray: <T>(arg: T, times: number) => T[]
// getArray = (arg: any, times: number) => {
//     return new Array(times).fill(arg)
// }

type GetArray = <T>(arg: T, times: number) => T[]
let getArray: GetArray = (arg: any, times: number) => {
    return new Array(times).fill(arg)
}
// interface GetArray<T> {
//     (arg: T, times: number): T[],
//     array: T[]
// }

// 泛型约束

interface ValueWithLength {
    length: number
}
// const getArray = <T extends ValueWithLength>(arg: T, times): T[] => {
//     return new Array(times).fill(arg)
// }

getArray([1, 2], 3)
getArray('abc', 3)
getArray({
    length: 2,
}, 3)

const getProps = <T, K extends keyof T>(object: T, proName: K) => {
    return object[proName]
}
const objs = {
    a: 'c',
    b: 'd',
}
// getProps(objs, 'a')
// getProps(objs, 'c') // 报错
