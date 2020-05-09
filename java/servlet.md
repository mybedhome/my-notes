日期 2020-05-06

Servlet3.x是在javaee 8中发布的，相比Servlet2.x新增了很多新特性用于简化web应用开发和部署。如:

（1）Servlet、Filter、Listener无需在web.xml中进行配置，可以通过注解进行配置；
（2）模块化编程，即将各个Servlet模块化，将配置文件也分开配置。
（3）Servlet异步处理，应对复杂业务处理；
（4）异步Listener\\\\\\\\\\\\\\\\，对于异步处理的创建、完成等进行监听；
（5）文件上传API简化；

#### 新增的注解

`@WebServlet`、`@WebFilter`、`@WebListener`、`@WebInitParam`、`@MultipartConfig`

**@WebServlet** 用于将一个类声明为 Servlet，该注解将会在部署时被容器处理，容器将根据具体的属性配置将相应的类部署为 Servlet。该注解具有下表给出的一些常用属性（以下所有属性均为可选属性，但是 vlaue 或者 urlPatterns 通常是必需的，且二者不能共存，如果同时指定，通常是忽略 value 的取值）。

![image-20200506230804741](/Users/wuhan/Library/Application Support/typora-user-images/image-20200506230804741.png)

