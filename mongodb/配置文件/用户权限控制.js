Enable Access Control启用访问控制：
1, mongo shell中使用参数--auth
2, 配置文件中设置security.authorization的值为enabled

  === === === === === === === === === ==
  角色可以从其数据库中的其他角色继承特权。 在admin数据库上创建的角色可以从任何数据库中的角色继承特权

创建用户的数据库是用户的身份验证数据库
尽管用户可以对这个数据库进行身份验证， 但用户可以在其他数据库中拥有角色;
即用户的认证数据库不限制用户的权限


内置角色分类
1, 数据库用户角色: 包含read和readWrite两个角色
read: 提供读取所有非系统集合和下列系统集合的数据的能力: system.indexes， system.js和system.namespaces集合
readWrite: 包含read角色所有权限及修改所有非系统集合的权限

2, 数据库管理员角色: 包含dbAdmin, dbOwner, userAdmin三个角色
dbAdmin: 提供管理任务的能力， 如与模式相关的任务， 索引， 收集统计信息
userAdmin: 提供在当前数据库上创建和修改角色和用户的能力。 由于userAdmin角色允许用户向任何用户（ 包括他们自己） 授予任何特权,
  因此该角色还间接向超级用户提供对数据库的访问权限。
dbOwner: 提供对数据库执行任何管理操作的能力。 此角色结合了readWrite， dbAdmin和userAdmin角色授予的权限

3, 集群管理员角色： 包含clusterAdmin, clusterManager, clusterMonitor, hostManager

4, 备份和恢复角色： 包含backup, restore

5, 所有数据库角色： 包含readAnyDatabase， readWriteAnyDatabase， userAdminAnyDatabase， dbAdminAnyDatabase

//创建用户
db.createUser({
  user: "wuhan",
  pwd: "wuhan&",
  roles: [{
    role: "readWriteAnyDatabase",
    db: "admin"
  }]
})
db.createUser({
  user: "test",
  pwd: "test",
  roles: [{
    role: "readWrite",
    db: "test"
  }]
})
