//函数的参数类型定义和返回值的定义

function getTotal(a: number, b: number) {//如果不定义返回值类型可能会出错
    return a + b
}
const a = getTotal(1, 2)


function getTotal1(a: number, b: number): number {
    return a + b
}
const c = getTotal1(1, 2)


//函数无返回值时如何定义

function sayHi(): void {
    console.log('hello');
}

//never返回值类型

// function forNever(): never {
//     while (true) { }
//     console.log(111);
// }

//函数参数为对象时（结构）时
function add({ one, two }: { one: number, two: number }): number {
    return one + two
}
const hsdf = add({ one: 1, two: 2 })