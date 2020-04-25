### SingleSpa应用的生命周期

注册 -> 加载 -> 引导(初始化) -> 挂载 -> 卸载

### 子应用生命周期钩子函数

* 每个子应用都必须导出`bootstrap`、`mount` 和`unmount`，`unload`是可选的
* 每个生命周期函数必须返回`Promise`或为`async function`
* 如果导出一个函数数组（而不只是一个函数），这些函数将一个接一个地调用，等待一个函数的promise解析后再调用下一个
* 如果没有调用`start`方法 ，则将加载应用程序，但不会对其进行引导，安装或卸载

### 生命周期函数参数

```javascript
function bootstrap(props) {
  const {
    name，//应用程序的名称        
    singleSpa ，// singleSpa实例   
    mountParcel ，//手动安装的函数 
    customProps   //其他自定义信息,该自定义信息是在注册子应用的时候传递的第四个参数
  } = props;     
  return Promise.resolve();
}
```



### 微前端之间的通讯

使用事件发射器或者发布订阅模式



### 微前端推荐设置

1. 将通用函数，组件，环境变量，设置api接口封装成独立的工具包发布到npm
2. 共享依赖，将大型库如`react`, `vue`, `moment`作为浏览器模块使用(通过script标签加载)



## Single-Spa包裹（parcel）

包裹是与框架无关的组件，它是一大堆功能，旨在由应用程序手动安装，而不必担心使用哪个框架来实现包裹或应用程序。包裹使用的方法与已注册的应用程序类似，但是通过手动函数调用而不是活动函数来安装。包裹可以与应用程序一样大，也可以与组件一样小，并可以用任何语言编写，只要它能导出正确的生命周期事件即可。在SingleSPA的世界中，您的SPA包含许多已注册的应用程序，并且可能包含许多包裹。通常，我们建议您在应用程序的上下文中挂载包裹，因为包裹将随应用程序一起挂载。通常仅在需要与多个框架一起使用时，才应创建一个包裹。

### 其他重要概念

**浏览器模块** 是可以通过`script`标签或通过`SystemJS`加载的模块，不同于本地esm模块通过`import Vue from vue`方式加载



### 注意事项和推荐设置

1. 每个微前端应用的webpack的output输出项配置为`jsonpFunction`，并且将`jsonpFunction`的值设置为唯一字符串，因为当一个页面存在多个webpack运行时时，按需加载块会冲突。

   > *如果在同一网页上使用多个webpack运行时（来自不同的编译），则存在全局命名空间中按需块冲突的风险*





##### 动态设置publicPath

```javascript
import { setPublicPath } from 'systemjs-webpack-interop'

// equivalent to __webpack_public_path__ = System.resolve('mars').slice(0, System.resolve('mars').lastIndexOf('/') + 1)
setPublicPath('mars')s
```

