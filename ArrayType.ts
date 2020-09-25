//TypeScript 中数组类型的定义

//1  一般数组类型定义

const arr1 = [1, 2, 3]  //类型推导

let arr2: number[] = [1, 2, 3] //直接定义类型

let arr3: string[] = ['1', '2', '30']

//若是数组中既有字符串又有数字

let arr4: (number | string)[] = [1, '2', 3]

let arr5: (number | string | number[])[] = [1, '2', 3, [1, 2]]


//2
//数组中对象类型的定义

const lsdf: { name: string, age: number }[] = [
    { name: 'linzhene', age: 18 },
    { name: 'linzhene', age:218 },
];

//上述代码写起来可能比较麻烦 ，而且如果有同样类型的数组，
//写代码也比较麻烦，TypeScript 为我们准备了一个概念，叫做类型别名(type alias)。

type Lady ={name:string,age:number}//也可以用类来写

const lfa :Lady[]=[
    { name: 'linzhene', age: 18 },
    { name: 'linzhene', age:218 },
]