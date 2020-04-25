## 使用requirejs实现浏览器里的模块化编程
1, 首先在html文件里加载requirejs
~~~
<script src="/common/js/require.min.js"></script>

可以通过data-main属性指定入口文件，如:
<script src="/common/js/require.min.js" data-main="/pages/js/main.js"></script>
data-main属性告诉requirejs加载完后马上加载其指定的js文件，在main.js里可以使用requirejs方法加载其他的js文件，如:

define(function(require){
		var $ = require('jquery'),
				lib = require('./lib');
});
~~~

2,代码样例
~~~
<script>
requirejs.config({
			paths: {
				cjs: '/common/js',
				angular:'/common/js/angular.min',
				ngSanitize:'/common/js/angular-sanitize.min'
			},
			shim:{ //angular没有使用AMD风格，所以需要用shim垫片导入
				angular:{
					exports:'angular'
				},
				ngSanitize:{
					deps:['angular'],
					exports:'ngSanitize'
				}
			}
		});

requirejs(['cjs/zepto.min','angular','ngSanitize'], function($,ng) {
	var app = ng.module('myapp', ['ngSanitize']);
  app.controller('myctrl',['$scope',function($scope){

  }])
  //手动启动模块
  ng.bootstrap(document.querySelector('#app'),['myapp']);
});
</script>
~~~
