// 四、适用类继承
/*类继承也叫做构造函数继承，在子类中执行父类的构造函数，实现原理：
可以将一个构造函数A的方法赋值给另一个构造函数B，，然后调用该方法，
使构造函数A在构造函数B内部被执行，这时候构造函数B就拥有了构造函数
A中的属性和方法，这就是使用类继承实现B继承与A的基本原理
*/
function A(x) {
  this.x = x
  this.say = function() {
    return this.x
  }
}

function B(x, y) {
  this.m = A // 把构造函数A作为一个普通函数引用给临时方法m
  this.m(x) // 执行构造函数A


}
// 五、使用封装类实现继承
function extend(Sub, Sup) {
  // Sub代表子类，Sup代表超类
  // 首先定义一个空函数
  var F = function() {}
    //   设置空函数的原型为超类的原型
  F.prototype = Sup.prototype
    //   实例化空函数，并把超类原型引用传递给子类
  Sub.prototype = new F()
    //   重置子类原型的构造器为子类自身
  Sub.prototype.constructor = Sub
    //   在子类中保存超类的原型，避免子类与超类耦合
  Sub.sup = Sup.prototype
  if (Sub.prototype.constructor === Object.prototype.constructor) {
    //   检测超类原型的构造器是否为原型自身
    Sup.prototype.constructor = Sup
  }
}
// 测试代码如下：
// 下面我们定义2个类A和类B，目的：B继承于A
function A(x) {
  this.x = x
  this.getX = function() {
    return this.x
  }
}
A.prototype.add = function() {
  return this.x + this.x
}
A.prototype.mul = function() {
    return this.x * this.x
  }
  // 构造函数B
function B(x) {
  A.call(this.x) //继承构造函数A中的所有属性及方法
}
extend(B, A) // B继承于A
var b = new B(11)

B.prototype.add = function() {
    return this.x + '' + this.x
  }
  // B函数中的add方法会覆盖A函数中的add方法，因此为了不覆盖A类
  // 中的add()方法，且调用A函数中的add方法
B.prototype.add = function() {
    return B.sup.add.call(this)
  }
  // B.sup.add.call(this) 中的B.sup就包含了构造函数A函数的指针，
  // 因此包含A函数的所有属性和方法，因此可以调用A函数中的add方法
