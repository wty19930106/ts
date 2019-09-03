import { rejects } from "assert";

// this 类型
class Counter {
  constructor(public count: number = 0) { }
  public add(value: number) {
    this.count += value
    return this
  }
  public subtract(value: number) {
    this.count -= value
    return this
  }
}
const counter1 = new Counter(10)

class PowCounter extends Counter {
  constructor(public count: number = 0) {
    super(count)
  }
  public pow(value: number) {
    this.count = this.count ** value
    return this;
  }
}
const powCounter = new PowCounter(3)
// console.log(
//   powCounter
//     .pow(2)
//     .add(2)
//     .subtract(3)
// )

// keyof 操作符
interface InfoInterfaceAdvanced {
  name: string
  age: number
}
let infoProp: keyof InfoInterfaceAdvanced
infoProp = 'name'
infoProp = 'age'

function getValue<T, K extends keyof T>(obj: T, names: K[]): Array<T[K]> {
  return names.map((n) => obj[n])
}
const infoObj = {
  name: 'lison',
  age: 18,
}
const infoValues: Array<string | number> = getValue(infoObj, ['name', 'age'])
// console.log(infoValues)

// 索引访问操作符
type NameTyeps = InfoInterfaceAdvanced['name']

function getProperty<T, K extends keyof T>(o: T, name: K): T[K] {
  return o[name]
}
interface Obj<T> {
  [key: string]: T
}
const objs1: Obj<number> = {
  age: 18,
}
let keys: Obj<number>['name']

interface Type {
  a: never
  b: never
  c: string
  d: number
  e: undefined
  f: null
  g: object
}
type Test = Type[keyof Type]

// 映射类型
interface Info1 {
  age: number
  name: string
  sex: string
}
type ReadonlyType<T> = {
  +readonly [P in keyof T]?: T[P]
}
type ReadonlyInfo1 = ReadonlyType<Info1>
const info11: ReadonlyInfo1 = {
  age: 18,
  name: 'lison',
  sex: 'man',
}
type RemoveReadonlyInfo2<T> = {
  -readonly [P in keyof T]: T[P]
}
type Info1WithoutReadonly = RemoveReadonlyInfo2<ReadonlyInfo1>
// Readonly Partial Pick Record
// type Pick<T, K extends keyof T> ={
//   [P in K]: T[P]
// }
interface Infos2 {
  name: string
  age: number
  address: string
}
const infos5: Infos2 = {
  name: 'lison',
  age: 18,
  address: '北京',
}

function pick<T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
  const res: any = {}
  keys.map((key) => {
    res[key] = obj[key]
  })
  return res
}
const nameAndAddress = pick(infos5, ['name', 'address'])

function mapObject<K extends string | number, T, U>(obj: Record<K, T>, f: (x: T) => U): Record<K, U> {
  const res: any = {}
  // tslint:disable-next-line:forin
  for (const key in obj) {
    res[key] = f(obj[key])
  }
  return res
}
const names = { 0: 'hello', 1: 'word', 2: 'bye' }
const lengths = mapObject(names, (s) => s.length)

interface Proxy<T> {
  get(): T
  set(value: T): void,
}
type Proxify<T> = {
  [P in keyof T]: Proxy<T[P]>
}
function proxify<T>(obj: T): Proxify<T> {
  const result = {} as Proxify<T>
  for (const key in obj) {
    result[key] = {
      get: () => obj[key],
      set: (value) => obj[key] = value,
    }
  }
  return result
}
const props = {
  name: 'lison',
  age: 18,
}
const proxifyProps = proxify(props)
// console.log(proxifyProps.name.get())
proxifyProps.name.set('li')
// console.log(proxifyProps.name.get())

// 拆包
function unproxify<T>(t: Proxify<T>): T {
  const result = {} as T
  for (const k in t) {
    if (t.hasOwnProperty(k)) {
      result[k] = t[k].get()
    }
  }
  return result
}
const originalProps = unproxify(proxifyProps)
// console.log(originalProps);

const stringIndex = 'a'
const numberIndex = 1
const symbolIndex = Symbol()
interface Objs2 {
  [stringIndex]: string,
  [numberIndex]: number,
  [symbolIndex]: symbol,
}
type keysType = keyof Objs2
type ReadonlyTypes<T> = {
  readonly [P in keyof T]: T[P]
}
const objs3: ReadonlyTypes<Objs2> = {
  a: 'aa',
  1: 11,
  [symbolIndex]: Symbol(),
}
type MapToPromise<T> = {
  [K in keyof T]: Promise<T[K]>
}
type Tuple = [number, string, boolean]
type promiseTuple = MapToPromise<Tuple>
const tuple1: promiseTuple = [
  new Promise((resolve, rejects) => resolve(1)),
  new Promise((resolve, rejects) => resolve('1')),
  new Promise((resolve, rejects) => resolve(false)),
]

// unknown
// 1.任何类型都可以赋值给unknown类型
let value1: unknown
value1 = '1'

// 2. 如果没有类型断言或基于控制流的类型细化时，unknown不可以赋值给其他类型，此时只能赋值给unknow和any类型
// let value2: unknown
// const value3: string = value2 as string

// 3.如果没有类型断言或基于控制流的类型细化时，不能再他上面进行任何操作
// let value4: unknown
// value4 += 1

// 4.unknown与任何其他类型组成的交叉类型，最后都等于其他类型
// type type1 = string & unknown
// type type2 = number & unknown
// type type1 = string[] & unknown

// 5.unknow与任何其他类型（除了any）组成的联合类型，都等于unknown类型
// type type5 = unknown | string string
// type type5 = unknown | any any
// type type5 = unknown | number[] unknown

// 6.never类型是unknown的子类型
type type8 = never extends unknown ? true : false

// 7.keyof unknown 等于类型 never
// type type9 = keyof unknown

// 8.只能对unknown进行等或不等操作，不能进行其他操作
// 9.unknown类型的值不能访问他的属性、作为函数调用和作为类创建
// 10.使用映射类型时如果遍历的是unknown类型，则不会映射任何属性

// 条件类型

// T extends U ? X : y
type Types2<T> = T extends string ? string : number
// let index: Types2<true>

// type TypeName<T> = T extends any ? T : never
// type Type3 = TypeName<string | Tuple>

type TypeName<T> =
  T extends string ? string :
  T extends number ? number :
  T extends boolean ? boolean :
  T extends undefined ? undefined :
  T extends () => void ? void :
  object

// type Type4 = TypeName<string[]>
// type Type4 = TypeName< (() => void) | string[]>

// 分布式条件类型
type Diff<T, U> = T extends U ? never : T
type Test2 = Diff< string | number | boolean, undefined | number>

// 条件类型和映射类型结合
type Type7<T> = {
  [K in keyof T]: T[K] extends Function ? K : never
}[keyof T]

interface Part {
  id: number
  name: string
  subparts: Part[]
  undatePart(newName: string): void
}
type Test3 = Type7<Part>

// 条件类型的类型推断 infer
type Type8<T> = T extends any[] ? T[number] : T
type Test4 = Type8<string[]>
type Test5 = Type8<string>

type Type9<T> = T extends Array<infer U> ? U : T
// type Test6 = Type9<string[]>
type Test6 = Type9<string>

// Exclude<T, U>
type Type10 = Exclude<'a' | 'b' | 'c', 'a'>

// Extract<T, U>
type Type11 = Extract<'a' | 'b', 'b'>

// NonNullable<T>
type Type12 = NonNullable<string | number | null | undefined>

// ReturnType<T>
type Type13 = ReturnType<() => string>
type Type14 = ReturnType<() => void>

// InstanceType<T> 获取构造函数的实例类型
class Aclass {
   constructor() {}
}
type T1 = InstanceType<typeof Aclass>
