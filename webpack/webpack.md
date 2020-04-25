## webpack必备loader和plugin
### loader
1. sass-loader
2. node-sass
3. css-loader
4. style-loader
5. file-loader
6. url-loader
### plugin
1. html-webpack-plugin //生成入口html文件
2. clean-webpack-plugin //清理之前生成的代码
3. extract-text-webpack-plugin //将页面中style的样式作为外部css文件提取出来

### webpack自带插件
1. CommonsChunkPlugin

## webpack开发必备配置
1. webpack-dev-server //热更新

~~~
devServer:{
  contentBase: './dist',
  disableHostCheck: true //禁用host检测，如果使用fillder代理必须禁用代理才生效
}
~~~
2. devtool
devtool有几个值，不同的值有不同的构建速度，比如：devtool: 'inline-source-map'，
inline-source-map只生成一个文件，.map文件和bundle.js文件合并在一起，而source-map则会
分离这两个文件,通常开发环境设置eval-source-map，生产环境不设置或设置为source-map

3. mode
>mode: 'development'
