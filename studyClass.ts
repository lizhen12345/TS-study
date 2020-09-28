//类的使用和es中类的概念大部分相同

//1,类的基本使用

class Lady {
    content = 'Hello'
    sayHi():string{
        return this.content
    }
}

const llin = new Lady

//2,类的继承，和es6中的继承是一样的

class hhhh extends Lady {
    saylove(){
        return 'i love you'
    }
}

//3,类的重写

//重写就是子类可以重新编写父类中的代码
// 如下

class linzhen extends Lady {
    sayHi(){//重写了父类中的sayHi方法
        return 'hhh'
    }
}

//3,super关键词的使用，基本和es6相同

class xiaojiejie1 extends Lady{
    saylove(){//用父类中的方法
        return super.sayHi()+'hh'
    }
}
