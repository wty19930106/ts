// const getFullName = ({ firstName , lastName}) => {
//     return `${firstName} ${lastName}`
// }
// getFullName({
//     firstName:'haha',
//     lastName:'wang',
// })
interface NameInfo {
    firstName: string,
    lastName: string
}
const getFullName = ({ firstName , lastName}: NameInfo): string => {
    return `${firstName} ${lastName}`
}
getFullName({
    firstName: 'haha',
    lastName: 'wang',
})

interface Vegatable {
    color?: string, // ？可选属性
    readonly type: string,  // 设置成只读属性
    [props: string]: any // 索引签名
}
const getVagetables = ( { color , type }: Vegatable ) => {
    return `A ${color ? (color + '') : ''} ${type}`
}

// getVagetables({
//     type: 'tomato',
//     size: 2,
// }as Vegatable) // 类型断言

// 类型兼容性
const vegatables = {
    color : 'red',
    type: 'tomato',
    size: 2,
}
// console.log(getVagetables(vegatables));

interface ArrInter {
    0: number,
    readonly 1: string
}

let arrI: ArrInter = [ 1 , 'a']

// type AddFunc = (num1: number, num2: number) => number
type AddFunc = (num1: number, num2: number) => number // 类型别名
const add: AddFunc = (n1, n2) => n1 + n2
// const add: AddFunc = (n1, n2) => `${n1} , ${n2}` // 错误

interface RoleDic {
    [id: string]: string
}
const role1: RoleDic = {
    0: 'super-admin',
    a: 'admin',
}

// 接口的继承
interface Vegatables {
    color: string
}

interface Tomato extends Vegatables {
    radius: number
}
interface Carrot extends Vegatables {
    length: number
}
const tomato: Tomato = {
    radius: 1,
    color: 'red',
}
const carrot: Carrot = {
    color: 'orange',
    length: 2,
}

// 混合类型接口
interface Counter {
    (): void,
    count: number
}
// const getCounter = (): Counter => {
//     const c = () => {c.count++}
//     c.count = 0
//     return c
// }
// const couter: Counter = getCounter()
