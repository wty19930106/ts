// export const name = 'lison'
// export const age = 18
// export const address = '北京'
const name = 'lison'
const age = 18
const address = '北京'
export { name, age, address}

export function func() {}
export class A {}

function func1() {}
class B {}
const b = ''
export {
  func1 as Function1,
  B as ClassB,
  b as StringB
}