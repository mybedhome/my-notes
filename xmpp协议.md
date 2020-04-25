### 什么是XMPP
XMPP是一种通讯协议，它定义了在两个或更多实体之间传递数据所采用的格式，对于XMPP来说，
实体通常是客户端和服务器，但它也允许两台客户端或两天服务器之间进行对等通信(客户端直接不能直接通信，需要经过客户端所在的XMPP服务器，而XMPP服务器之间可以直接通信，不需要借助中间服务器)。互联网上有很多
XMPP服务器，彼此之间能够相互访问。在XMPP上交换的是XML数据，这让通信具有丰富的可扩展的结构。

### XMPP中的XML流
在XMPP中，XML数据被组织成一对流，每个流分别用于通信的一个方向，每个XML流均由一个开始元素、后跟XMLL节和其他顶级元素，然后是一个结束元素组成。每个XMPP节(可带有子元素和属性)均是该流的一级子元素。在XMPP连接末尾，这两个流形成了一对有效的XML文档。

### XMPP节
XMPP节(stanza)是XMPP协议的核心部分，而XMPP应用程序则关注如何发送和响应各种类型的节，节可能包含网络上其他实体的信息。

XMPP协议中与通信相关的三个最核心的节: < message > , < presence > , < iq > ,
通过组织不同的节来达到各式各样不同的通讯目的。

每个节都有其属性，虽然不同的节，其属性各有不同，但是一些基本的属性是这些所有的节所共同的。这些共同属性包括:from , to , type , id。


### XMPP网络
任何XMPP网络都是由若干角色组成的，这些角色可分为服务器，客户端，组件和服务器插件。

* **服务器**

   XMPP服务器(更精确的说是使用服务器-服务器协议的XMPP实体或客户端-服务器协议中的服务器端)是任何XMPP网络的循环系统。服务器的主要任务就是为XMPP节提供路由，无论这些节是从内部的一个用户发往另一个用户，还是从本地用户发往远程服务器的其他用户。

   一组能相互通信的XMPP服务器构成了一个XMPP网络，如果某个服务器不能使用服务器-服务器协议，那么它就是一个孤岛，不能与外部服务器通信。XMPP服务器总是允许用户连接到自己。

* **客户端**

  大多数XMPP实体是客户端，通常客户端就是XMPP应用程序中的用户，也有可能是机器人。客户端必须向某个地方的XMPP服务器进行身份验证。服务器将客户端发送的所有节路由到适当的目的地。服务器还管理客户端会话的其他方面，包括花名册和裸地址。

### XMPP寻址
XMPP网络上的每个实体都有一个或多个地址，称为JID，每个JID可由三部分组成:节点，域和资源，域部分总是必须的，其他两部份可选，具体取决于它们所处的环境，域表示服务器地址，如果节指向只有一个域的JID，那么这个节将被服务器路由到某个组件或插件。

JID的资源部分标识一个特定的客户端连接，如果kevin先生(他的JID是kevin@fulcrum.con)希望连接他的书法和图书馆，那么他的这些连接可以通过kevin@fulcrum.con/study和kevin@fulcrum.con/library来寻址。

JID有两种类型，裸JID和完整JID，完整JID总是特定实体的最具体的地址，而裸JID就是完整JID去除资源部分后的地址。

### XMPP节
< message >和< presence >节的应答节一般仅限于报告错误，< iq >节的应答节可以用来通知成功操纵、确认命令或返回请求数据。

#### < presence >节
普通presence不包含type属性，或者type属性的值为unavailable或error,presence节表示实体的出席状态或可访问性。

用户通过给服务器发送不携带to属性的presence节来操纵自己的出席状态
~~~
<presence /> //设置用户的出席状态为在线
<presence type="unavailable"/> //设置用户的出席状态为离线

<!-- 通过子元素的形式来展示额外的出席信息 -->

//show元素(只能用在presence节中)用来传达用户的可访问性，可能的值为 away|chat|dnd|xa
//这四个值分别表示离开，有意聊天，不希望被打扰及长期离开
//status元素是一个可读字符串，这个字符串一般会紧挨着联系人名字显示，跟QQ联系人列表上的签名是一样的
<presence>
<show>away</show>
<status>个性签名</status>
</presence>

//用户的每个已连接的资源都有一个介于-128~127的优先级，默认为0，可以通过在<presence>节中包含一个<priority>子元素来设置它。负优先级的资源不会接收通过裸JID寻址方式传送给他们的消息。
<presence>
<priority>10</priority>
<status>新的签名</status>
</presence>
~~~

#### < message >节
尽管message节可以包含任意扩展元素，但< body >和< thread >元素是为向消息中添加内容而提供的正常机制，这两种子元素均是可选的。

#### < iq >节
< iq >节表示的是Info/Query,它为XMPP通信提供请求与响应机制，与HTTP的GET和POST类似。

每个iq节必须有一个响应(message和presence节不需要响应或只有错误响应节)，响应的类型为result或error，此外，每一个iq节必须带有一个id属性。

#### error节
error节的type属性取值有: cancel|modify|continue|auth|wait,
### 通用属性
三种节均支持一组通用属性，from,to,type,id，但是type的属性在不同的节中有不同的值，通用的值是error，这表示该节是对已接收到的同一类型的节的错误响应。

1. presence节中关于出席订阅的type属性的值有subscribe,unsubscribe,subscribed,unsubscribed，前两个值请求建立一个新的出席订阅或取消一个现有的订阅，而另外两个值则是对这类请求的应答。其他值还有unavailabel表示不可访问(下线状态)

2. message节中的type属性取值有: chat|groupchat|normal|headline|error，后面两种比较少用，如果message没有type属性，则type的默认值为normal，headline类型的消息被那些不希望或不支持的自动化服务使用。

3. iq节中的type属性取值有: get|set|result|error，前两个类型为iq请求节，后两个为iq响应节

### 常用功能代码
#### 获取花名册
~~~
//请求
<iq type="get" id="roster1">
  <query xmlns="jabber:iq:roster" />
</iq>

//响应
<iq type="get" id="roster1">
  <query xmlns="jabber:iq:roster">
    <item jid="ivan@fulcrum" name="ivan" subscription="both" />
    <item jid="Jane@fulcrum" name="Jane" subscription="both" />
  </query>
</iq>

//subscription 取值：both|to|from|remove，分别表示双向订阅，订阅对方，被订阅
~~~

### 设置花名册(添加联系人)
~~~
<iq type="set" id="roster2">
  <query xmlns="jabber:iq:roster">
    <item jid="rose@fulcrum" name="Mr.rose" />
  </query>
</iq>
~~~


### 多人聊天
#### 角色和职位
每一登记都具有前一等级的所有性质。

| 角色 | 特权
| - | :-: | -: |
| 无(None) | 没有权限，不在房间中
| 游客(Visitor) | 可以查看对话，但不能交谈
| 参与者(Participant) | 可以完全参与公开对话
| 主持人(Moderator) | 可以将用户从房间中踢出，或者将参与者降为游客

| 职位 | 特权
| - | :-: | -: |
| 被排斥者(outcast) | 禁入该房间
| 无(none) | 可以加入房间
| 成员/占有者(occupant) | 可以加入房间并能获取成员列表
| 管理员(admin) | 可以禁止成员，可以添加删除成员职位，或主持人角色
| 所有者(owner) | 可以添加和移除管理员和所有者，可以配置和销毁房间

### 更改成员的岗位
~~~
//禁止kevin加入聊天室，如果kevin在聊天室中会被强制踢出
<iq type="set" to="demo@conference.fulcrum.com">
  <query xmlns="http://jabber.org/protocal/muc#admin">
    <item jid="kevin@fulcrum.com" affiliation="outcast" />
    <reason>修改的原因</reason>
  </query>
</iq>
~~~

### 更改成员的角色
//将昵称为向着太阳的用户的角色更改为参与者participant，他将可以参与公开聊天
//由于角色是单次房间访问，因此更改角色是通过别名完成的而不是JID
~~~
<iq type="set" to="demo@conference.fulcrum.com">
  <query xmlns="http://jabber.org/protocal/muc#admin">
    <item nick="向着太阳" role="participant" />
    <reason>修改的原因</reason>
  </query>
</iq>
~~~

