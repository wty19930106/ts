//  class Parent {
//      constructor (name) {
//         this.name = name
//      }
//      getName () {
//          return this.name
//      }
     
//  }

//  class Child extends Parent {
//      constructor(name, age){
//          super(name)
//          this.age = age
//      }
//  }
//  const c = new Child('wty', 18)  
//  console.log(c)
//  console.log(c.getName())
// console.log(c instanceof Parent);
// console.log(Object.getPrototypeOf(Child) === Parent) // true

// super作为函数
// super作为对象
    //在普通方法 -》 父类的原型对象
    //在静态方法中 -》 父类

// class Parent {
//     constructor () {
//         this.type = 'parent'
//     }
//     getName () {
//         return this.type
//     }
// }
// Parent.getType = () => {
//     return 'is Parent'
// }

// class Child extends Parent {
//     constructor () {
//         super()
//         console.log('constructor: ' + super.getName())    
//     }
//     getParentName () {
//         console.log('getParentName: ' + super.getName())
//     }
//     static getParentType () {
//         console.log('getParentType:' + super.getType());   
//     }
// }
// const c = new Child()
// c.getParentName()
// Child.getParentType()

// class Parent {
//     constructor() {
//         this.name = 'parent'
//     }
//     print () {
//         console.log(this.name)
//     }
// }
// class Child extends Parent {
//     constructor () {
//         super()
//         this.name = 'child'
//     }
//     childPrint () {
//         super.print()
//     }
// }
// const c = new Child()
// c.childPrint() //调用父类的print方法，父类的this-》子类的实例。子类实例的name指的是child 所以打印出chilid

// prototype 和 __proto__
var objs = new Object()
console.log(objs.__proto__ === Object.prototype) // true

// 子类的__proto__指向父类本身
// 子类的prototype属性的__proto__指向父类的prototype属性
// 实例的__proto__属性的__proto__指向父类实例的__proto__

// es5 原生构造函数
// Boolean
// Number
// String
// Date
// RegExp
// Function
// Array
// Error
// Object

// es6 继承原生构造函数
class CustomArray extends Array {
    constructor (...args) {
        super(...args)
    }
}
 
const arr = new CustomArray(3, 4, 5)
console.log(arr);
