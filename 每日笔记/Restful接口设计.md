### 接口设计常用http状态码
* 200 正常
* 400 请求参数有误
* 401 接口校验失败
* 403 没有接口访问权限
* 404 Not Found 请求地址错误
* 405 Method Not Allowed 不允许的请求方法
* 413 上传的数据太大
* 500 代码错误
* 502 上游服务返回的数据格式不正确
* 503 服务不可用
* 504 上游服务不可用
* 507 服务器无法存储完成请求所必须的内容

### 接口公共参数
timestap: 毫秒级时间戳，1.客户端的请求时间标示 2.后端可以做请求过期验证 3.该参数参与签名算法增加签名的唯一性

app_key: 签名公钥，签名算法的公钥，后端通过公钥可以得到对应的私钥

sign: 接口签名，通过请求的参数和定义好的签名算法生成接口签名，作用防止中间人篡改请求参数

did: 设备id，设备的唯一标示，生成规则例如android的mac地址的md5和ios曾今udid(目前无法获取)的md5, 1:数据收集 2.便于问题追踪 3.消息推送标示

### 接口安全
>过期验证／签名验证／重放攻击／限流／转义

### 接口url设计
>/resources/资源实例/resources/资源实例.json

>/albums/2018/photos/1.json //获取相册名为2018照片名为1的照片
