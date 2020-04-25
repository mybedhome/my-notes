#### 加载模块语法

```html
	<script type="systemjs-importmap">
    {
      "imports": {
        "mars": "./dist/bundle.js"
      }
    }
  </script>
  <script type="systemjs-module" src="import:mars"></script> 
	<!-- 或者 
	<script>System.import("mars")</script>
	-->
  <script src="https://cdn.jsdelivr.net/npm/systemjs/dist/system.js"></script>
```

