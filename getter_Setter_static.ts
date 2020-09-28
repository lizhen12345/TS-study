//TypeScript 类的 Getter、Setter 和 static 使用

//getter属性的关键字是get,后边跟着类似方法的东西,但是你要注意，它并不是方法，归根到底还是属性。

class Lin {
    constructor(private _age: number) { }
    get age() {
        return this._age-10//可以改变私有属性进行输出，而私有属性只能在类的内部访问
    }
    set age(age:number){//私有属性可以通过setter进行改变
        this._age = age
    }
}
const dajiao1 = new Lin(18)
console.log(dajiao1.age);

//类中的static
//学习类，都知道要想使用这个类的实例，就要先New出来（），
// 但有时候人们就是喜欢走捷径，在们有对象的情况下，也想享受青春的躁动，有没有方法？肯定是有方法的。
// 用static声明的属性和方法，不需要进行声明对象，就可以直接使用，代码如下。


class Lin2{
    static saylove(){
        return 'i love you'
    }
}
console.log(Lin2.saylove());

