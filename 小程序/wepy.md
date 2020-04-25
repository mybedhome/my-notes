wepy框架中包含的类wepy.app,wepy.page,wepy.

文件后缀:组件，页面，app都是.wpy后缀，混合文件后缀.js,wxs模块文件后缀.wxs

### wxs模块
wxs模块主要用来声明常量和纯函数，相当余lodash这样的工具库函数，
wxs模块中的定义的变量只能在template模板里使用

### 事件绑定
templete上绑定的事件处理函数可以声明在类中(自定义方法形式)，也可以声明在methods中，
当在methods声明事件处理函数时优先级最高，此时自定义方法形式的处理函数不会触发。
~~~
methods = {
    upper() {
      console.log(1)   
    }
}

upper () { //这个函数不会执行
  console.log(2)
}
~~~

### 踩坑系列
1. 使用wepy init初始项目的时候没有选择redux，后面再自行安装redux相关库的时候，小程序会报如下错误：
~~~
sdk uncaught third Error   module "npm/redux-actions/lib/utils/flattenWhenNode.js" is not defined
~~~

解决办法: 运行以下命令
~~~
1. npm install util –no-save
2. wepy build –no-cache
3. npm run dev
~~~
