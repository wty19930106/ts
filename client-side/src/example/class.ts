// class Point {
//     public x: number
//     public y: number
//     constructor(x: number, y: number) {
//         this.x = x
//         this.y = y
//     }
//     public getPosition() {
//         return `(${this.x}, ${this.y})`
//     }
// }
// const point = new Point(1, 2)

// class Parent {
//     public name: string
//     constructor(name: string) {
//         this.name = name
//     }
// }
// class Child extends Parent {
//     constructor(name: string) {
//         super(name)
//     }
// }

// 修饰符
// public 公共
// private 私有
// protected 受保护 在继承该类的子类中可以被访问
// class Parent {
//     // private age: number
//     protected age: number
//     constructor(age: number) {
//         this.age = age
//     }
//     protected getAge() {
//         return this.age
//     }
// }
// const p = new Parent(19)
// // console.log(p.age)
// // console.log(Parent.age)

// class Child extends Parent {
//     constructor(age: number) {
//         super(age)
//         // console.log(super.age)
//         // console.log(super.getAge())
//     }
// }

// // readonly 只读属性
// class UserInfo {
//     public readonly name: string
//     constructor(name: string) {
//         this.name = name
//     }
// }
// const userInfo = new UserInfo('wty')

// class A {
//     constructor(protected name: string) {}
//     protected getName() {
//         return this.name + '111'
//     }
// }
// // const a1 = new A('wty')
// class B extends A {
//     constructor(name: string) {
//         super(name)
//         // console.log(super.getName())
//     }
// }
// const b1 = new B('wty')

// 静态属性
class Parent {
    public static getAge() {
        return this.age
    }
    private static age: number = 19
    constructor() {}
}
const p = new Parent()
// console.log(p.age)
// console.log(Parent.age)

// 可选类属性
class Info {
    public name: string
    public age: number
    private infoString: string
    constructor(name: string, age: number, sex?: string) {
        this.name = name
        this.age = age
    }
    get infoStr() {
        return this.infoString
    }
    set infoStr(val) {
        this.infoString = val

    }
}
// const info1 = new Info('wty')
// const info3 = new Info('wty', 18)
const info4 = new Info('wty', 18, 'man')
info4.infoStr = 'wty : 19'

// 抽象类
// abstract class People {
//     constructor(public name: string) { }
//     public abstract printName(): void
// }
// class Man extends People {
//     constructor(name: string) {
//         super(name)
//         this.name = name
//     }
//     public printName() {
//         console.log(this.name)
//     }
// }
// const m = new Man('wty')
// m.printName()

// abstract class People {
//     public abstract name: string
//     abstract get insideName(): string
//     abstract set insideName(val: string)
// }
// class P extends People {
//     public name: string
//     public insideName: string
// }

// 实例属性
class People {
    constructor(public name: string) {}
}
let p2 = new People('wty')
class Animal {
    constructor(public name: string) {}
}
p2 = new Animal('hh')

// 类类型实现接口
interface FoodInterFace {
    type: string
}
class FoodClass implements FoodInterFace {
    public type: string
}

// 接口继承类
class A {
    protected name: string
}
interface I extends A {}
class B extends A implements I {
    public name: string
}

// 泛型中使用类类型
const create = <T>(c: new() => T): T => {
    return new c()
}

class Infos {
    public age: number
    constructor() {
        this.age = 18
    }
}
// console.log(create<Infos>(Infos))
