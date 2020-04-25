### XML DOM对象的创建
~~~
//IE
var xmlDom = new ActiveXObject('Microsoft.XMLDOM');
//现代浏览器
var xmlDom = new document.implementation.createDocument('', '', null);
~~~

### 解析XML文档和字符串
~~~
//解析XML文档
xmlDom.load('a.xml');//所有浏览器都可以使用xmlDom.load方法

//解析XML字符串
//IE xmlDom.loadXML('<message>this a xml string</message>')

//其他 parser = new DOMParser();
parser.parseFromString(xmlString,"text/xml")
~~~
