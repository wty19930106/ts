// 枚举
const getIndex = () => {return 3}
// enum Status {
//   Uploading,
//   Success = getIndex(),
//   Failed = 5
// }
// console.log(Status.Uploading)
// console.log(Status.Success)
// console.log(Status.Failed)

// 字符串枚举
enum Message {
  Error = 'Sorry, error',
  Success = 'Hoho, success',
  Failed = Error
}
// console.log(Message.Failed)

//异构枚举 不建议
enum Result {
  Failed = 0,
  Success = 'success',
}

enum Animals {
  Dog = 1,
  Cat = 2,
}

interface Dog {
  type: Animals.Dog
}
                 
const dog: Dog = {
  type: Animals.Dog
}

//联合枚举类型
enum Status {
  Off,
  On
}
interface Light {
  status: Status
}
// const light: Light = {
//   status: Status.Off
// }

const enum Animals1 {
  Dog = 1,
}
const dog2 = Animals1.Dog
