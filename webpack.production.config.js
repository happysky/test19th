const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin')

module.exports = {
    mode: 'production',
    entry: path.resolve(__dirname, './src/js/app.js'),
    output: {
      filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            },{
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                  'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true,
                        },
                    },
                ],
            },{
                test: require.resolve('zepto'),
                loader: 'exports-loader?window.Zepto!script-loader'
            }
        ]
    },
    devServer: {
        host: "127.0.0.1",
        contentBase: path.join(__dirname, "dist"),
        port: 8080,
        watchContentBase: true,
        inline: true,
        compress: true,
        open: true, //是否自动打开浏览器
        // https: {
        //     key: "xx",
        //     cert: "xx"
        // },
        disableHostCheck: true,
        //noInfo:true,
        // proxy: {
        // }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html'),
            //hash: true, //如果要开启inlineSource则不能开启hash，否则会找不到文件
            inlineSource: '.(js|css)',
            minify: {
                inject: true,
                removeAttributeQuotes: true,
                collapseWhitespace: true,
                html5: true,
                minifyCSS: true,
                removeComments: true,
                removeEmptyAttributes: true
            }
        }),
        new HtmlWebpackInlineSourcePlugin() // 实例化内联资源插件
    ]
};