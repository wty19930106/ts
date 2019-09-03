// 装饰器
// function setProp() {
//   return function(target) {

//   }
// }
// function setName() {
//   console.log('get setName')
//   return (target) => {
//     console.log('setName')
//   }
// }
// function setAge() {
//   console.log('get setAge')
//   return (target) => {
//     console.log('setAge')
//   }
// }
// @setName()
// @setAge()
// class ClassDec {

// }
// 类装饰器
// let sign = null
// function setName(name: string) {
//   return (target: new() => any) => {
//     sign = target
//     console.log(target.name)

//   }
// }
// @setName('lison')
// class ClassDec {
//   constructor() {}
// }

// function addName(constructor: new() => any) {
//   constructor.prototype.name = 'lison'
// }
// @addName
// class ClassD {}
// interface ClassD {
//   name: string
// }
// const d = new ClassD()
// console.log(d.name)

// function classDecorator<T extends new(...args: any[]) => {}>(target: T) {
//     return class extends target {
//       public newProperty = 'new property'
//       public hello = 'override'
//     }
// }
// @classDecorator
// class Greeter {
//   public property = 'property'
//   public hello: string
//   constructor(m: string) {
//     this.hello = m
//   }
// }
// console.log(new Greeter('world'))

// 属性描述符
// configurable writable enumerable
interface ObjWithAnyKeys {
   [key: string]: any
}
let obj12: ObjWithAnyKeys = {}
Object.defineProperty(obj12, 'name', {
  value: 'lison',
  writable: false,
  configurable: true,
  enumerable: true,
})
// console.log(obj12)
// function enumerable(bool: boolean) {
//   return (target: any, propertyName: string, descrtptor: PropertyDescriptor) => {
//     console.log(target, propertyName)
//     descrtptor.enumerable = bool
//   }
// }
// function enumerable(bool: boolean): any {
//   return (target: any, propertyName: string, descrtptor: PropertyDescriptor) => {
//    return {
//      value() {
//        return 'not age'
//      },
//      enumerable: bool,
//    }
//   }
// }
// class ClassF {
//   constructor(public age: number) {}
//   @enumerable(false)
//   public getAge() {
//     return this.age
//   }
// }
// const classF = new ClassF(18)
// console.log(classF.getAge())

// for (const key in classF) {
//   console.log(key);
// }

// function printPropertyName(target: any, propertyName: string) {
//   console.log(propertyName)
// }
// class ClassH {
//   @printPropertyName
//   public name: string
// }

function required(target: any, propertyName: string, index: number) {
  console.log(`修饰的是${propertyName}的第${index + 1}个参数`)
}
class ClassI {
  public name: string = 'lison'
  public age: number = 18
  public getInfo(prefix: string, @required infoType: string): any {
    return prefix + ' ' + this[infoType]
  }
}
interface ClassI {
  [key: string]: string | number | Function
}
const classI = new ClassI()
classI.getInfo('heihei', 'age')
