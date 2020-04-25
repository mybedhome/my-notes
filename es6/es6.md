### Object.assign
该方法用于将所有可枚举属性的值从一个或多个源中复制到目标对象，类似于jQuery.extend方法。
~~~
const object1 = {
  a: 1,
  b: 2,
  c: 3
};
const object3 = [
object1,
  {m:10,n:6}
]

const object2 = Object.assign({c: 4, d: 5}, ...object3);

console.log(object2.c, object2.d,object2.m,object2.n);
//3,5,10,6
~~~

### Generator
Generator函数的声明方式
~~~
function* gen() {
  <!-- 第一次调用next方法执行的代码 -->
    console.log('start run')
    let a = 1,b=2;
    yield a; //调用next方法时遇到yield会暂停gen函数的执行。
  <!-- 第一次调用next方法执行的代码 -->


  <!-- 第二次调用next方法执行的代码 -->
    console.log(b)
    yield b;
  <!-- 第二次调用next方法执行的代码 -->

  <!-- 第三次调用next方法执行的代码 -->  
    console.log('gen函数执行结束')  
  <!-- 第三次调用next方法执行的代码 -->
}
~~~

Generator函数的运行流程:
~~~
1，调用generator函数，创建一个generator对象

const g = gen(); //调用gen函数时，gen函数体内的代码并没有执行


2,通过调用g对象的next方法执行gen函数体内的代码,next方法会返回一个对象，这个对象包含value和done两个属性，value的值就是yield后面返回的值，done表示该generator函数是否执行完毕
let rel = g.next() //output: start run; rel:{value:1, done: false}
rel = g.next() //output: 1; rel:{value:2, done: false}
rel = g.next() //output: gen函数执行结束 rel:{value:undefined, done: true}
~~~
