//TypeScript 中的 interface 接口

let res1 = (name:string,age:number,bust:number)=>{
    age<24 && bust>=90 && console.log(name+'进入面试');
    age>=24 && bust<90 && console.log(name+'beitaotai');
}

//定义成统一接口
interface Girl {
    name: string;
    age: number;
    bust: number;
  }

  const screenResume = (girl: Girl) => {
    girl.age < 24 && girl.bust >= 90 && console.log(girl.name + "进入面试");
    girl.age > 24 || (girl.bust < 90 && console.log(girl.name + "你被淘汰"));
  };
  

  const girl = {
    name: "大脚",
    age: 18,
    bust: 94,
  };
  
  screenResume(girl);
  


  //接口和类型别名的区别

//   类型别名可以直接给类型，比如string，而接口必须代表对象

//接口非必选值得定义部分用？
  
interface lin {
    name:string,
    age:number,
    bust?:number
}
