import { EROFS } from "constants";
import { type } from "os";

// 高级类型1
// 交叉类型
// const mergeFunc = <T, U>(arg1: T, arg2: U): T & U => {
//   let res = {} as T & U
//   res = Object.assign(arg1, arg2)
//   return res
// }
// mergeFunc({ a: 'a'}, {b: 'b'})

// 联合类型
// const getLengthFunc = (content: string | number): number => {
//   if(typeof content === 'string'){ return content.length}
//   else { return content.toString().length}
// }

// 类型保护
const valueList = [123, 'abc']
const getRandomValue = () => {
  const num = Math.random() * 10
  if (num < 5) {return valueList[0]} else {return valueList[1]}
}
const item = getRandomValue()

// function isString(value: number | string): value is string {
//   return typeof value === 'string'
// }
// if (item.length) {
//   console.log(item.length)
// } else {
//   console.log(item.toFixed())
// }

// if (isString(item)) {
//   console.log(item.length)
// } else {
//   console.log(item.toFixed())
// }
// string/number/boolean/symbol 中的一种
// if (typeof item === 'string') {
//   console.log(item.length)
// } else {
//   console.log(item.toFixed())
// }

// class CreatedByClass1 {
//   public age =18
//   constructor(){}
// }

// class CreatedByClass2 {
//   public name = 'wty'
//   constructor() {}
// }
// function getRandomItem() {
//   return Math.random() < 0.5 ? new CreatedByClass1() : new CreatedByClass2()
// }
// const item1 = getRandomItem()
// if (item1 instanceof CreatedByClass1){
//   console.log(item1.age);
// } else {
//   console.log(item1.name);
// }

// null/undefined
// let values = '123'
// // values = undefined
// const sumFunc = (x: number, y?: number) => {
//   return x + (y || 0)
// }
// const getlengthFunc = (value: string | null): number =>{
//   // if (value === null) { return 0}
//   // else { return value.length}
//   return (value || '').length
// }

// function getSplicedStr(num: number | null): string  {
//   function getRes(prefix: string) {
//     return prefix + num!.toFixed(2).toString()
//   }
//   num = num || 0.1
//   return getRes('wty-')
// }
// console.log(getSplicedStr(1.234))

// 类型别名
type TypeString = string
let str: TypeString

interface PositionType<T> {x: T, y: T}
const position1: PositionType<number> = {
  x: 1,
  y: -1,
}
const position2: PositionType<string> = {
  x: 'left',
  y: 'right',
}
interface Childs<T> {
  current: T,
  child?: Childs<T>,
}
const ccc: Childs<string> = {
  current: 'first',
  child: {
    current: 'second',
    child : {
      current: 'third',
    },
  },
}

interface Alias {
  num: number
}
interface AliasInterface {
  num: number
}
let _alias: Alias = {
  num: 123,
}
const _interface: AliasInterface = {
  num: 123,
}
_alias = _interface

// 字面量类型
type Name = 'Lison'
// const name3: Name = 'Lison'
type Direction = 'north' | 'east' | 'south' | 'west'
function getDirectiongFirstLetter(direction: Direction) {
  return direction.substr(0, 1)
}

type Age = 18
interface InfoInterface {
  name: string
  age: Age
}
const _info2: InfoInterface = {
  name: '123',
  age: 18,
}

/**
 * 可辨识联合两要素
 * 1.具有普通的单例类型属性
 * 2.一个类型别名包好了那些类型的联合
 */
interface Square {
  kind: 'square',
  size: number
}
interface Rectangle {
  kind: 'rectangle',
  height: number,
  width: number
}
interface Circle {
  kind: 'circle',
  radius: number
}
type Shape = Square | Rectangle | Circle
function assertNever(value: never): never {
  throw new Error('Unexpected object:' + value)
}
function getArea(s: Shape): number {
  switch (s.kind) {
    case 'square': return s.size * s.size; break;
    case 'rectangle': return s.height * s.width; break;
    case 'circle': return  Math.PI * s.radius ** 2; break;
    default: return assertNever(s)

  }
}
