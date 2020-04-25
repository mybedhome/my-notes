#### nvm的简单使用

**安装**

```shell
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh 
//或者
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh 
此时nvm就被安装在了/.nvm下啦
```

**命令：**
 `nvm ls-remote`：列出所有可以安装的node版本号
 `nvm install v10.4.0`：安装指定版本号的node
 `nvm use v10.3.0`：切换node的版本，这个是全局的
 `nvm current`：当前node版本
 `nvm ls`：列出所有已经安装的node版本

