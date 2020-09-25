//基础静态类型

const count: number = 33

const myName: string = 'linzhen'

//对象类型

const xiaojiejie: {
    name: string,
    age: number
} = {
    name: 'linzhen',
    age: 15
}

//对象类型也可以是数组

let hhh: string[] = ['lin', 'zje']//定义一个数组，数组里的元素是字符串

//类
class Person { }
const dajiao: Person = new Person()

//函数类型

const jianxiaojiejie:()=>string=()=>{//我们还可以定义一个函数类型，并确定返回值
    return 'lin'
}
