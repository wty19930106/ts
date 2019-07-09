// let name = 'wty'
// name = 123  //报错

let ar: Array<number | string> = [1, 'a']
// ar = [2, 'b', false]

window.onmousedown = (mouseEvent) => {
  console.log(mouseEvent)
  
}

interface Info2 {
  name: string,
  info : { age: number}
}
let infos:Info2
const infos1 = { name: 'wty', info:{ age: 18 } }
const infos2 = { age: 18 }
const infos3 = { name: 'wty', age: 18 }
infos = infos1
// infos = infos2
// infos = infos3

//函数兼容性
//参数个数
// let x = (a: number) => 0
// let y = (b: number, c: number) => 0
// const arrs = [1, 2, 3]
// arrs.forEach(item => {
  // console.log(item)
// })

//参数类型
// let x = (a: number) => 0
// let y = (b: string) => 0
// x = y

//可选函数和剩余函数
const getSum = (arr: number[], callback: (...args: number[]) => number):number  => {
    return callback(...arr)
}
const res = getSum([1, 2, 3], (...args: number[]): number => args.reduce((a, b) => a+b,0))
const res2 = getSum([1, 2, 3], (arg1: number, arg2: number, arg3: number) => arg1 + arg2 + arg3)
// console.log(res2);

//函数参数双向协变
// let funcA = (arg: number | string): void => {}
// let funcB = (arg: number): void => {}
// funcA = funcB
// funcB = funcA

// 返回值类型
let x = (): string | number => 0
let y = (): string => 'a'
let z = (): boolean => false

// 函数重载
function merge(arg1: number, arg2: number): number
function merge(arg1: string, arg2: string): string
function merge(arg1: any, arg2: any) {
  return arg1 + arg2 
}
function sum(arg1: number, arg2: number): number
function sum(arg1: any, arg2: any): any {
  return arg1 + arg2
}
let func = merge

// 枚举
enum StatusEnum {
  On,
  Off,
}
enum AnimalEnum{
  Dog,
  Cat,
}
let s = StatusEnum.On
// s = AnimalEnum.Cat // 不兼容

// class AnimalClass {
//   public static age: number
//   constructor(public name: string) {}
// }
// class PeopleClass {
//   public static age: string
//   constructor(public name: string){}
// }

// class FoodIsClass {
//   constructor(public name: number){}
// }
// let animal: AnimalClass
// let people: PeopleClass
// let food: FoodIsClass

// animal = people
// animal = food //没有静态成员，constructor类型不兼容

// class ParentClass {
//   private age: number
//   constructor() {}
// }
// class ChildrenClass extends ParentClass {
//   constructor() {
//     super()
//   }
// }
// class OtherClass {
//   private age: number
//   constructor(){}
// }

// const children: ParentClass = new ChildrenClass()
// const other: ParentClass = new OtherClass()

// 泛型
interface Data<T> {
  data: T
}
let data1: Data<number>
let data2: Data<string>
// data1 = data2 //不兼容