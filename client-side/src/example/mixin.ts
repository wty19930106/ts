interface ObjectA {
  a: string
}

interface ObjectB {
  b: string
}
let Aa: ObjectA = {
  a: 'a',
}
let Bb: ObjectB = {
  b: 'b',
}
// let AB: ObjectA & ObjectB = Object.assign(Aa, Bb)
// console.log(AB)

class ClassAa {
  public isA: boolean
  public funcA() {}
}
class ClassBb {
  public isB: boolean
  public funcB() {}
}
class ClassAb implements ClassAa, ClassBb {
  public isA: boolean = false
  public isB: boolean = false
  public funcA: () => void
  public funcB: () => void
  constructor() {}
}
function mixins(base: any, form: any[]) {
  form.forEach((fromItem) => {
    Object.getOwnPropertyNames(fromItem.prototype).forEach((key) => {
      // console.log(key)
      base.prototype[key] = fromItem.prototype[key]
    })
  })
}
mixins(ClassAb, [ClassAa, ClassBb])
const ab = new ClassAb()
// console.log(ab)
