// 原型
var person1 = {
  name: '李明',
  age: 18,
  sayName: function() {
    console.log(this.name)
  }
}
var person2 = {
    name: '李华',
    age: 16
    sayName: function() {
      console.log(this.name)
    }
  }
  // 实例1
var person1 = {
    name: '李明',
    age: 18
  }
  // 实例2
var person2 = {
    name: '李华',
    age: 16
  }
  // person1.sayName()
  // 问题:代码重复;实例与原型之间看不出有什么联系

// 函数--- > 解决代码重复问题
// function Person(name, age) {
//   return {
//     name,
//     age
//   }
// }
// // 生成实例对象
// var person1 = Person('李明', 18)
// var person2 = Person('李华', 16)
// 问题:person1和person2之间没有内在的联系，
// 不能反映他们是同一个原型对象的实例

// 原型
function Person(name, age) {
  this.name = name
  this.age = age
  this.type = '动物界'
  this.eat = function() {
    console.log('吃饭')
  }
}
// /*对构造函数使用new运算符，生成实例并且
//      this变量会绑定到实例对象上*/
// // 实例对象
// var person1 = new Person('李明', 18)
// var person2 = new Person('李华', 16)
// console.log(person1.type)
// console.log(person2.type)
// console.log(person1.eat())
// console.log(person2.eat())
//   /*此时person1和person2会自动含有一个constructor
//   属性,指向它们的构造函数*/

// // 问题:每生成一个实例，会为重复的内容，多分配一些内存

// // 原型
// function Person(name, age) {
//   this.name = name
//   this.age = age
// }
// Person.prototype.type = '动物界'
// Person.prototype.eat = function() {
//     console.log('吃饭')
//   }
/*这时所有实例的type属性和eat()方法，
都是同一个内存地址，指向prototype对象*/


function Person(name, age) {
  this.name = name
  this.age = age
  this.friends = ["张三", "李四"]
}
Person.prototype = {
  constructor: Person,
  sayName: function() {
    console.log(this.name)
  }
}
var person1 = new Person("姗姗", 18)
var person2 = new Person("露露", 20)
person1.friends.push("王五")
console.log(person1.friends) // "张三", "李四","王五"
console.log(person2.friends) // "张三", "李四"
console.log(person1.sayName === person2.sayName) // true
console.log(person1.sayName())
console.log(person2.sayName())
