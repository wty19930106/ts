// 布尔类型
// let bool: boolean = false
// let bool: boolean
// bool = true

// 数值类型
let num: number = 123
num = 0b1111011 // 二进制的123
num = 0o173 // 八进制的123
num = 0x7b // 十六进制的123

// 字符串类型
let str: string
str = 'abc'
str = `数值是${num}`
// console.log(str);

// 数组类型
// 写法1
let arr1: number[]
arr1 = [5, 2]
// 写法2
let arr2: number[]
let arr3: Array<string | number>
arr3 = [1, 'a']

// 元组类型
let tuple: [string, number, boolean]
tuple = ['a', 2, false]

// 枚举类型
enum Roles {
    SUPER_ADMIN,
    ADMIN = 4,
    USER,
}
// console.log(Roles.SUPER_ADMIN);
// console.log(Roles[4]);

// any类型
let value: any
value = 'abc'
value = 123
value = false
const arr4: any[] = [1, 'a']

// void类型
const consoleText = (text: string): void => {
    // tslint:disable-next-line:no-console
    console.log(text);
}
let v: void
v = undefined
// consoleText('abc')

// null和undefined类型
let u: undefined
u = undefined
let n: null
n = null

// never类型
const errorFunc = (message: string): never => {
    throw new Error(message)
}

// object类型
let obj = {
    name: 'wty',
}

function getObject(obj: object): void {
    // tslint:disable-next-line:no-console
    console.log(obj);

}
getObject(obj)

// 类型断言
const getLength = (target: string | number): number => {
    if (( target as string).length || (target as string).length === 0) {
        return ( target as string).length
    } else {
        return target.toString().length
    }
}
