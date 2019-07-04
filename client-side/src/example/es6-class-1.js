// class Point {
//     constructor (x, y) {
//         this.x = x
//         this.y = y
//     }
//     getPositon () {
//         return `${this.x}, ${this.y}`
//     }
// }

// const p1 = new Point(1, 2)
// console.log(p1.hasOwnProperty('x'))
// console.log(p1.hasOwnProperty('getPositon'))
// console.log(p1.__proto__.hasOwnProperty('getPositon'))

// 取值函数和存值函数

// var info = {
//     _age: 18,
//     set age (arg) {
//         if (arg > 18) {
//             console.log('变老了')
//         }else {
//             console.log('年轻呢')
//         }
//     },
//     get age () {
//         console.log('获取年龄');
//         return this._age
//     }

// }
// console.log(info.age);
// info.age = 17

// class Info {
//     constructor (age) {
//         this._age = age
//     }
//     set age (newAge) {
//         console.log('newAge is'+newAge);
//         this._age = newAge    
//     }
//     get age (){
//         return this._age
//     }
// }

// const Infos = class {
//     constructor (){}
// }
// const testInfo = new Infos()

// 静态方法

// class Point { 
//     constructor (x, y) {
//         this.x = x 
//         this.y = y
//     }
//     getPositon () {
//         return `${this.x}, ${this.y}`
//     }
//     static getClassName () {
//         return Point.name
//     }
// }

// const p  = new Point(1, 2)
// console.log(p.getClassName());
// console.log(Point.getClassName());

// 私有方法
// 私有方法移出模块
// const _func2 = () => {}
// class Point {
//     func1 () {
//         _func2.call(this)
//     }
// }
// const P = new Point()

//私有属性
// class Point {
//     #ownProp = 12
// }

class Parent {
     constructor() {
         if (new.target === Parent) {
             throw new Error ('不能创建实例')
         }
     }
}
class Child extends Parent { 
    constructor(){
        super()
    }
}
// const c = new Parent() //抛出错误
const c1 = new Child()