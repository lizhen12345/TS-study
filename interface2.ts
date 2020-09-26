//继续学习  接口interface

//1 允许加入任意值

interface lin {
    name: string,
    age: number,
    bust?: number,
    [propname: string]: any,//意思是属性的名字是字符串，但是其值可以是任意值
    sayHi():string//函数返回值类型是string
}
let zhen = {
    name: 'l',
    age: 15,
    bust: 12,
    sex: 'boy'//意思是属性的名字是字符串，但是其值可以是任意值
}
let fun = (zhen: lin) => {
    console.log(zhen.name);
    zhen.sex && console.log(zhen.sex);


}


//2接口里的方法


//3 接口中的继承

interface wang extends lin{
    say():string
}



