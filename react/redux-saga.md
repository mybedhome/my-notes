### Effects创建器

#### take
take方法用来监听action的触发，只监听一次，当第一次put或dispatch触发一个action的时候，take方法会被调用，
take方法的返回结果是传入put方法的action对象
~~~
LOGIN_REQUEST为action名称，
const user = 'test', password = '123456';
put({type: 'LOGIN_REQUEST', user, password})
const {type, user, password} = yield take('LOGIN_REQUEST')
~~~
