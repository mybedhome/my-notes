###  

~~~
1.官网下载源码 
wget https://ffmpeg.org/releases/ffmpeg-4.2.2.tar.bz2
2.解压 
tar jxvf ffmpeg-4.2.2.tar.bz2
3.进入目录
cd ffmpeg-4.2.2
4.编译安装
./configure --disable-x86asm --enable-shared --enable-ffplay --prefix=/usr/local/ffmpeg
// 如果需要安装ffplay，使用下面的命令，且需先安装x264库
./configure --prefix=/usr/local/ffmpeg --enable-shared --disable-x86asm --enable-libx264 --enable-gpl --enable-pthreads --extra-cflags=-I/usr/local/x264/include --extra-ldflags=-L/usr/local/x264/lib

make && make install
5.添加软连接，使ffmpeg命令全局可用
cp /usr/local/ffmpeg/bin/ffmpeg /usr/local/bin/ffmpeg
6.验证安装是否成功 ffmpeg -version

如果报错 libavdevice.so.57: cannot open shared object file: No such file or directory
执行命令： vim /etc/ld.so.conf.d/ffmpeg.conf 然后添加一行内容： /usr/local/ffmpeg/lib 之后保存并退出，然后执行 ldconfig 使配置生效，现在再次执行 ffmpeg -version 显示就正常了


参考链接：
https://www.jianshu.com/p/3eecccdb28f9
https://blog.csdn.net/sinat_41559158/article/details/80363649
https://yq.aliyun.com/articles/47863
~~~



安装x264

````
1.下载
git clone https://code.videolan.org/videolan/x264.git
2.进入x264目录
cd x264
3.编译安装
./configure --enable-shared --disable-asm --prefix=/usr/local/x264
make && make install
````

