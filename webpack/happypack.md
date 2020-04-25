#### happypack的使用

```javascript
module: {
        rules: [
            {
                test: /\.css$/,
                use: 'happypack/loader?id=css',
                //把对.js文件的处理转交给id为babel的HappyPack实例
                //用唯一的标识符id来代表当前的HappyPack是用来处理一类特定文件
                include: path.resolve('./src'),
                exclude: /node_modules/
            },
            {
                test: /\.js/,
                use: 'happypack/loader?id=babel',
                include: path.resolve('./src'),
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html'
        }),
        new HappyPack({
            id: 'babel',
            loaders: ['babel-loader']// 和rules里的配置相同
        }),
        new HappyPack({
            id: 'css',
            loaders: ['style-loader', 'css-loader']// 和rules里的配置相同
        }),
    ]
```

