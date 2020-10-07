//只读属性和抽象类

class Person5{
    public readonly _name:string
    constructor(name:string){
        this._name = name
    }
}
const peso = new Person5('lin')
//不可改变name


//抽象类的关键词是abstract,里边的抽象方法也是abstract开头的

abstract class Person7{
    abstract skill()//没有具体方法，抽象出来
}

//子类继承

class linzifa extends Person7{
    skill(){
        console.log('liin');
    }
}

//其实在工作中我们也会把这样的需求用接口来实现。
class linzifasfd extends Person7{
    skill(){
        console.log('zhen');
    }
}