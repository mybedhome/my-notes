### 安装mysql5.6版本
下载地址: https://dev.mysql.com/downloads/mysql/5.6.html#downloads

yum list installed | grep mysql //查看CentOS下是否已安装mysql

删除已安装的mysql
yum -y remove mysql_libs.x86_64

~~~
第一步:下载mysql服务端和客户端的rpm包
下载mysql服务端
wget https://cdn.mysql.com//Downloads/MySQL-5.6/MySQL-server-5.6.40-1.el6.x86_64.rpm

下载mysql客户端
wget https://cdn.mysql.com//Downloads/MySQL-5.6/MySQL-client-5.6.40-1.el6.x86_64.rpm

第二步:安装mysql服务端和客户端的rpm包
rpm -ivh MySQL-server-5.6.40-1.el6.x86_64.rpm
rpm -ivh MySQL-client-5.6.40-1.el6.x86_64.rpm

NOTE: 第二步完成之后会生成一个含mysql root账号的初始密码的文件在这个路径下'/root/.mysql_secret'
和一个默认配置文件'/usr/my.cnf'

第三步: cd到/usr/bin目录下执行mysql_install_db 命令 安装mysql

第四步： 安装成功后启动mysql更改初始密码
service start mysql //启动mysql服务
mysql -uroot -p初始密码 //登录mysql客户端
SET PASSWORD = PASSWORD('新密码'); //设置新的root密码
或 ALTER USER 'root'@'localhost' IDENTIFIED BY '新密码'; //设置新的root密码
或 >use mysql; update user set password=password('新密码') where user='root';
flush privileges; //刷新权限

第五步：添加新用户
允许本地 IP 访问 localhost, 127.0.0.1
create user 'test'@'localhost' identified by '123456';
允许外网 IP 访问
create user 'test'@'%' identified by '123456';  

第六步： 为新用户分配权限
授予用户通过外网IP对于该数据库的全部权限
grant all privileges on `testdb`.* to 'test'@'%' identified by '123456';

授予用户在本地服务器对该数据库的全部权限
grant all privileges on `testdb`.* to 'test'@'localhost' identified by '123456';  

第七步：阿里云配置安全组
必须配置安全组才能远程访问
~~~

### 第二种安装方式
~~~
wget http://repo.mysql.com/mysql80-community-release-el7-3.noarch.rpm
rpm -ivh mysql80-community-release-el7-3.noarch.rpm
yum update (这步可选)
yum install -y mysql-server
~~~

### 权限设置
chown mysql:mysql -R /var/lib/mysql

### 初始化mysql
mysqld --initialize

### 启动mysql
systemctl start mysqld

### 查看mysql运行状态
systemctl status mysqld

### 查看mysql配置文件内容
cat /etc/my.cnf
