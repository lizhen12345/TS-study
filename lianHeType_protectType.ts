//联合类型和类型保护
// 所谓联合类型，可以认为一个变量可能有两种或两种以上的类型

interface linzhen5 {
    isman: boolean,//是个true
    say: () => {}
}
interface linzhen6 {
    isman: boolean,
    skill: () => {}
}
//1 断言方式
function judgeMan(animal: linzhen5 | linzhen6) {
    if(animal.isman){
        (animal as linzhen5).say()
    }else{
        (animal as linzhen6).skill()
    }
}

//2  in语法
function judgeMan1(animal:linzhen5|linzhen6){
    if('say' in animal){
        animal.say()
    }else{
        animal.skill()
    }
}
//3  类型保护-typeof 语法
function add(first: string | number, second: string | number) {
    if (typeof first === "string" || typeof second === "string") {
      return `${first}${second}`;
    }
    return first + second;
  }
  
  //4类型保护-instanceof 语法

  class NumberObj {
    count: number;
  }
  
  function addObj(first: object | NumberObj, second: object | NumberObj) {
    if (first instanceof NumberObj && second instanceof NumberObj) {
      return first.count + second.count;
    }
    return 0;
  }
  