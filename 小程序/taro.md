### Taro生命周期与原生微信小程序的生命周期的映射

#### 入口文件
1. componentWillMount/onLaunch
入口文件的componentWillMount对应小程序中的onLaunch，监听程序初始化，初始化完成时触发（全局只触发一次）

2. componentDidMount
和componentWillMount一样对应小程序中的onLaunch, 监听程序初始化，初始化完成时触发（全局只触发一次), 在componentWillMount后执行

3. componentDidShow
对应小程序应用中onShow, 监听小程序启动或切前台

4. componentDidHide
对应小程序应用中onHide, 监听小程序切后台

5. componentDidCatchError
对应小程序应用中onError, 监听错误

6. componentDidNotFound
对应onPageNotFound，程序要打开的页面不存在时触发，微信小程序中也可以使用 Taro.onPageNotFound 绑定监听

Note: 前3个生命周期方法里都可以用this.$router.params访问到小程序初始化参数
