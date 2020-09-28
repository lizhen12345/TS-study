//Ts类中的构造函数
//对构造函数一定不陌生，构造函数就是在类被初始化的时候，自动执行的一个方法。

class Cat{
    public name : string
    constructor(name:string){
        this.name = name
    }
}
const cat = new Cat('linzhen')

//更简单的写法
class Cat1{//这种写法就相当于你定义了一个name,然后在构造函数里进行了赋值,比较方便
    constructor(public name:string){
    }
}
const cat1 = new Cat('linzhen')

//2
//类继承器中的构造器写法，

class Cat2 extends Cat1{
    constructor(public age:number){
        super('linzhen')
    }
}
//子类继承父类并有构造函数的原则，就是在子类里写构造函数时，必须用super()调用父类的构造函数，
//如果需要传值，也必须进行传值操作。就是是父类没有构造函数，子类也要使用super()进行调用，否则就会报错。