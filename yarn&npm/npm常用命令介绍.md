npm是Nodejs自带的包管理工具,安装nodejs后便可以直接使用npm

### 升级npm
> npm install npm -g

### 查看当前npm的版本号
>npm -v

### 全局安装
>npm install gulp -g
>windows全局安装的路径在C:\Users\Administrator\AppData\Roaming\npm

### 局部安装
1. dependencies
> npm install mongoose --save

2. devDependencies
> npm install webpack --save-dev

### 安装指定版本
> npm install jquery@latest --save //安装最新版本

>npm install jquery@2.1.1 --save  //安装2.1.1版本

>npm install jquery@">=2.0.0 <2.2.0" --save //安装大于等于@2.0.0小于2.2.0版本

### 安装github包
因为有些包没有添加到npm里面，但在github上面，我们可以使用以下方式来安装
>指定安装某个版本
npm install git+ssh://git@github.com:npm/npm.git#v1.0.27
直接安装
npm install git+https://isaacs@github.com/npm/npm.git
指定安装某个版本
npm install git://github.com/npm/npm.git#v1.0.27

### 删除安装包
>npm uninstall -g gulp //删除全局包

>npm uninstall mongoose //删除局部包

怎么安装就怎么删除，不用跟版本号。

### 清除缓存
>npm cache clean

### 查看当前应用使用包的版本号
>npm ls mongoose

### 仅安装package.json文件中的dependencies依赖的模块
>npm install --production

[参考链接](https://github.com/jiayisheji/blog/issues/5)
