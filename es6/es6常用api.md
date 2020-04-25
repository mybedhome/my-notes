#### Object
创建一个新的以parentObj为原型对象的对象
Object.create(parentObj)

Object.assign({}, {}) //扩展合并对象

Object.entries(obj) //返回一个由obj对象自有属性组成的键值对的二维数组，
```
const object1 = { foo: 'bar', baz: 42 };
console.log(Object.entries(object1)); //[["foo", "bar"], ["baz", 42]]
```
Object.keys(obj) //返回一个由obj对象自有属性字符串组成的数组

Object.is(value1, value2) //比较两个值是否相等，可以比较任意数据类型，如果下列任何一项成立，则两个值相同：
两个值都是 undefined
两个值都是 null
两个值都是 true 或者都是 false
两个值是由相同个数的字符按照相同的顺序组成的字符串
两个值指向同一个对象
两个值都是数字并且
都是正零 +0
都是负零 -0
都是 NaN
都是除零和 NaN 外的其它同一个数字