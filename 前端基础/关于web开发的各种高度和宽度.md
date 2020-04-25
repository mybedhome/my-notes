window.innerHeight:
浏览器的内部高度(浏览器的可见高度)，包含滚动条的高度(qq浏览器包含书签栏的高度)

document.documentElement.clientHeight:
html文档的可见高度，不包含滚动条的高度

所以,document.documentElement.clientHeight = window.innerHeight - 水平滚动条的高度(17px);

clientHeight:
元素内容的可见高度, 包含padding的高度和伪元素的高度

offsetHeight:
只读属性，通常是它的css像素高度，包含padding和border和水平滚动条的高度，但不包含伪元素的高度，等于clientHeight+边框的高度+滚动条高度(17px)

scrollHeight:
Element.scrollHeight只读属性是元素内容高度的度量，包括由于溢出而在屏幕上不可见的内容,包含元素的padding和伪元素的高度， 
如果元素的内容不需要垂直滚动条，它的scrollHeight就等于clientHeight



### 浏览器自定义滚动条

```css
.test-1::-webkit-scrollbar {/*滚动条整体样式*/
        width: 10px;     /*高宽分别对应横竖滚动条的尺寸*/
        height: 1px;
    }
.test-1::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
        border-radius: 10px;
         -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
        background: #535353;
    }
.test-1::-webkit-scrollbar-track {/*滚动条里面轨道*/
        -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
        border-radius: 10px;
        background: #EDEDED;
    }

```

