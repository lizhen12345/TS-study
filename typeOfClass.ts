// ts中类的访问类型，其实访问类型基于三个关键词private、protected和public,也是三种访问类型

class Person1{
    name:string
}

const person1 = new Person1()
person1.name = 'linzhen'

//public 访问属性讲解
// public从英文字面的解释就是公共的或者说是公众的，在程序里的意思就是允许在类的内部和外部被调用.

class Person2{
    public name:string
    public sayHi(){
        return this.name+'hello'
    }
}
//这就是类的外部
const person2 = new Person2()
person2.name = 'linzhen'
person2.sayHi()


//private 访问属性
//private 访问属性的意思是，只允许再类的内部被调用，外部不允许调用
class Person3{
    private name:string
    public sayHi(){
        return this.name+'hello'//此处不报错
    }
}
//这就是类的外部
const person3 = new Person2()
person3.name = 'linzhen'//报错 
person3.sayHi()

//protected 访问属性
//protected 允许在类内及继承的子类中使用

class Person4{
    protected name:string
    public sayHi(){
        return this.name+'hello'//此处不报错
    }
}
class hhhhhh extends Person4{
    public saylin(){
        return this.name//在子类中使用this.name不报错
    }
}



