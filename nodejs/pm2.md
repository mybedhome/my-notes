### pm2常用命令
~~~
//当系统重启的时候pm2自动重启node服务
1. pm2 startup //当执行这个命令会提示下面第二步的代码，拷贝这段代码执行一下就可以了
2. sudo env PATH=$PATH:/usr/local/src/node-v8.10.0-linux-x64/bin /usr/local/src/node-v8.10.0-linux-x64/lib/node_modules/pm2/bin/pm2 startup systemv -u wuhan --hp /home/wuhan
~~~

~~~
更新pm2
npm install pm2@latest -g;
pm2 update; //安装完最新版本之后需要update一下才能将当前内存中的旧版本替换成最新的
~~~
