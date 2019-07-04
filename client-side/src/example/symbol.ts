// const s = Symbol('wty')
// console.log(s.toString());
// console.log(Boolean(s));
// console.log(!s);

const prop = 'name'
const info = {
    [prop]: 'wty',
    [`my${prop}is`]: 'ty',
}
// console.log(info);

const s5 = Symbol('name')
const info2 = {
    [s5]: 'wty',
    age: 18,
    sex: '男',
}
// console.log(info2);
info2[s5] = 'tt'
// console.log(info2);

for (const key in info2) {
    // console.log(key);

}
// console.log(Object.keys(info2));
// console.log(Object.getOwnPropertyNames(info2));
// console.log(JSON.stringify(info2));
// console.log(Object.getOwnPropertySymbols(info2));
// console.log(Reflect.ownKeys(info2));

// Symbol.for() Symbol.keyFor()

const s8 = Symbol.for('wty')

// console.log(Symbol.keyFor(s8));//wty
// console.log(Symbol.keyFor(s5));//undefined

// instanceof 判断对象是否是某个对象创建的实例
const obj2 = {
    [Symbol.hasInstance](otherObj: object) {
        // console.log(otherObj);

    },
}
// console.log( {a:'a'} instanceof <any>obj2);

// Symbol.isConcatSpreadable是否将数组扁平化处理
let arr = [1, 2];
arr[Symbol.isConcatSpreadable] = false
// console.log([].concat(arr,[3,4]));

// Symbol.species
class C extends Array {
    constructor(...args) {
        super(...args)
    }
    static get[Symbol.species]() {
        return Array
    }
    public getName() {
        return 'wty'
    }
}
const c = new C(1, 2, 3)
const a = c.map((item) => item + 1)
// console.log(a);
// console.log(a instanceof C);
// console.log(a instanceof Array)

// Symbol.match
let obj3 = {
    [Symbol.match](str: string) {
        // tslint:disable-next-line:no-console
        console.log(str.length);
    },
}

// Symbol.replace 同match
// Symbol.search 同match
// Symbol.split  同match

// Symbol.iterator
const arr5 = [1, 2, 3]
const iterator = arr5[Symbol.iterator]()
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// Symbol.toPrimitive
let obj4: unknown = {
    [Symbol.toPrimitive](type) {
        // console.log(type);

    },
}
// const res = (obj4 as number)++
// const res = `abc${obj4}`

// Symbol.toStringTag
let obj5 = {
    // [Symbol.toStringTag]:'wty'
    get [Symbol.toStringTag]() {
        return 'wty'
    },
}
// tslint:disable-next-line:no-console
console.log(obj5.toString());

// Symbol.unscopables 在使用with关键字时，哪些属性会被with排除
