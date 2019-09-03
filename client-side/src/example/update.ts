import { rejects } from "assert";
import { resolve } from "path";

// function getIndexPromise(bool) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (bool) { resolve('a') } else { reject(Error('error')) }
//     }, 1000)
//   })
// }
// getIndexPromise(false).then((res) => {
//   console.log(res)
// }).catch((error) => {
//   console.log(error)
// })

// async function asyncFunction() {
//   try {
//     const res = await getIndexPromise(false)
//     console.log(res)
//   } catch (error) {
//     console.log(error)
//   }
// }
// asyncFunction()

// interface Res {
//   data: {
//     [key: string]: any,
//   }
// }
// // tslint:disable-next-line:no-namespace
// namespace axios {
//   export function post(url: string, config: object): Promise<Res> {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         const res: Res = { data: {}}
//         if (url === '/login') { res.data.user_id = 111 } else { res.data.role = 'admin'}
//         console.log(2)
//         resolve(res)
//       }, 1000)
//     })
//   }
// }
// interface LoginInfo {
//   user_name: string,
//   password: string
// }

// async function loginReq({user_name, password}: LoginInfo) {
//   try {
//     console.log(1)
//     const res = await axios.post('/login', {
//       data: {
//         user_name,
//         password,
//       },
//     })
//     console.log(3)
//     return res
//   } catch (err) {
//     throw new Error(err)
//   }
// }
// async function getRoleReq(userid: number) {
//   try {
//     const res = await axios.post('/user_roles', {
//       data: {
//         userid,
//       },
//     })
//     return res
//   } catch (error) {
//       throw new Error(error)
//     }
// }

// loginReq({user_name: 'lison', password: '123'}).then((res) => {
//   const { data: {user_id}} = res
//   getRoleReq(user_id).then((res) => {
//     const {data: {role}} = res
//     console.log(role)
//   })
// })

interface Res {
  data: {
    [key: string]: any,
  }
}

// tslint:disable-next-line:no-namespace
namespace axios {
  export function post(url: string, config: object): Promise<Res> {
    return new Promise((resolve, rejects) => {
      setTimeout(() => {
        const res: Res = {data: {}}
        if (url === '/login') { res.data.userId = 111 } else {res.data.role = 'admin'}
        resolve(res)
      }, 1000)
    })
  }
}
interface UserInfo {
  username: string,
  password: string
}
async function loginReq({username, password}: UserInfo) {
  try {
    const res = await axios.post('/login', {
      data: {
        username,
        password,
      },
    })
    return res
  } catch (err) {
    throw new Error(err)
  }
}

async function getRoleReq(userId: number) {
  try {
    const res = await axios.post('/getUserRole', {
      data: {
        userId,
      },
    })
    return res
  } catch (err) {
    throw new Error(err)
  }
}

loginReq({username: 'lison' , password: '123'}).then((res) => {
  const {data : {userId}} = res
  getRoleReq(userId).then((x) => {
    const { data: {role}} = x
    // console.log(role)
  })
})

async function getTime(format: string) {
  const moment = await import('moment')
  return moment.default().format(format)
}
// getTime('L').then((res) => {
//   console.log(res)
// })

interface ObjIn {
  name?: string
  age?: number
}
const objIn = {
  sex: 'man',
}
function printInfo(info: ObjIn) {
  console.log(info)
}
printInfo(objIn as ObjIn)

function mergeOptions<T, U extends string>(op1: T, op2: U) {
  return {...op1, op2}
}
// mergeOptions({a:'a'}, 'name') // {a:'a', op2: 'name'}
function getExcludeProp<T extends { props: string }>(obj: T) {
  const { props, ...rest} = obj
  return rest
}
const excludeObj = {
  props: 'something',
  name: 'lison',
  age: 18,
}
console.log(getExcludeProp(excludeObj))
