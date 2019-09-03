interface InforInter {
  name: string
  getRes(input: string): number
}
interface InforInter {
  name: string
  getRes(input: number): string
}
let inforInter: InforInter
inforInter = {
  name: 'lison',
  getRes(text: any): any {
    if (typeof text === 'string') { return text.length } else { return String(text) }
  },
}

// namespace Validations {
//   export const checkNumber = () => {}
// }
// namespace Validations {
//   export const checkLetter = () => {}
// }

// class Validations {
//   constructor() {}
//   public checkType() {}
// }
// namespace Validations {
//   export const numberReg = /^[0-9]+$/
// }
// console.dir(Validations)
