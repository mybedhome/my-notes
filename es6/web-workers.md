## Worker
#### 基本概念
一个新线程，在后台运行，不会阻塞任何主用户界面脚本（作为后台脚本被调用）。Workers 是相对重量级的，不要大规模使用。
一个 worker 可以执行不少任务，包括并行计算、后台 I/O、以及客户端数据库操作。
worker 不应该中断主 UI 或直接操作 DOM；它应该向主线程返回一个消息，并让主线程更新主 UI。

#### 基础样例
```javascript
//main.js创建主线程
const myWorker = new Worker("worker.js");
const firstInput = document.querySelector('#input1');

firstInput.onchange = function() {
   myWorker.postMessage([firstInput.value]);
}

myWorker.onmessage = function(e) {
  if (e.data > 100) {
    myWorker.terminate(); //终止 myWorker线程
  }
  firstInput.value = e.data;
}

myWorker.onerror = function(e){
  console.log(e.message); //可读的错误消息
  console.log(e.filename); //出现错误消息的脚本文件的名称
  console.log(e.lineno); //出现错误消息的脚本文件的行数
}

//worker.js
onmessage = function(e) {
  postMessage(Number(e.data * 2))
}
```

#### 导入脚本
Worker 线程可以访问一个全局函数，importScripts()，该函数支持将脚本和数据库导入它们的作用域。它可以不接收参数，也可以接收多个要导入的资源的 URL 作为参数。
```javascript
//worker.js
const configData = importScripts('config.js');
onmessage = function(e) {
  if (configData.env === 'dev') {
    postMessage(Number(e.data * 2))
  } else {
    postMessage(Number(e.data))
  }
}
```

## SharedWorker(共享Worker)
#### 基本样例
```javascript
//A页面
if (!!window.SharedWorker) {
  const myWorker = new SharedWorker("worker.js");
  const firstInput = document.querySelector('#input1');

  firstInput.onchange = function() {
     myWorker.port.postMessage([firstInput.value, 10]);
  }

  myWorker.port.onmessage = function(e) {
    firstInput.value = e.data;
  }
}

//B页面
if (!!window.SharedWorker) {
  const myWorker = new SharedWorker("worker.js");
  const secondInput = document.querySelector('#input2');

  secondInput.onchange = function() {
     myWorker.port.postMessage([secondInput.value, 100]);
  }

  myWorker.port.onmessage = function(e) {
    firstInput.value = e.data;
  }
}

//worker.js
onconnect = function(e) {
  const port = e.ports[0];
  port.onmessage = function(e) {
    const result = e.data[0] * e.data[1];
    if (result > 100) {
      //关闭当前线程的连接，如果是A页面触发的，则关闭A页面线程的连接，不影响B页面的线程
      //共享worker没有terminate方法，关闭连接也可以在AB页面实现
      port.close();
    }
    port.postMessage(result);
  }

  //如果使用下面这种写法监听message事件，必须调用start方法启动消息监听
  // port.addEventListener('message', function(e) {
  //   port.postMessage(e.data[0] * e.data[1]);
  // })
  //
  // port.start()
}
```

Note: 1. onmessage和onconent方法里面不能使用window对象，也不能使用alert,console等调试方法，
且全局方法importScripts只能放在这两个方法的外面。
2. 共享Worker里的全局变量是多个SharedWorker实例之间共享的，比如worker.js里的全局变量num改变后，
其他共享worker读取num的值是改变后的值。而普通worker是各自独立的，不会互相影响。
