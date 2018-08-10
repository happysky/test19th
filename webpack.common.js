const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        main: ["babel-polyfill",path.resolve(__dirname, './src/js/app.js')],
        result: ["babel-polyfill",path.resolve(__dirname, './src/js/result.js')]
    },
    output: {
      //filename: '[name].js'
      filename: '[name].[chunkhash].js',
    },
    resolve: {
        extensions: [
            '.js',
            '.jsx',
            '.less',
            '.css',
            '.html'
        ],
        alias: {
            //utils: path.resolve(__dirname, `${pathConfig.clientSrcPath}/utils`)
        }
    },
    module: {
        rules: [{
                test: /\.js$/,
                include: path.resolve(__dirname, "src"),
                use: [{
                    loader: 'babel-loader',
                    options: {
                        "presets": [
                            "react",
                            "env",
                            "stage-2"
                          ],
                          "plugins": [
                            //"transform-async-to-generator",
                          //   "universal-import"
                          ],
                          "env": {
                            "development": {
                              // "plugins": ["react-hot-loader/babel"]
                            }
                          }
                    }
                }]
            },{
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
                ]
            },{
                test: require.resolve('zepto'),
                loader: 'exports-loader?window.Zepto!script-loader'
            }
        ]
    },
    optimization: {
        runtimeChunk: {
            name: "manifest"
        },
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendor",
                    chunks: "all"
                }
            }
        }
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, './src/index.html'),
            //hash: true, //如果要开启inlineSource则不能开启hash，否则会找不到文件
            // inlineSource: '.(js|css)',
            chunks: ['manifest','vendor','main'],
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
        new HtmlWebpackPlugin({
            filename: 'result.html',
            template: path.resolve(__dirname, './src/result.html'),
            //hash: true, //如果要开启inlineSource则不能开启hash，否则会找不到文件
            // inlineSource: '.(js|css)',
            chunks: ['manifest','vendor','result'],
            minify: {
                inject: true,
                removeAttributeQuotes: true,
                collapseWhitespace: true,
                html5: true,
                minifyCSS: true,
                removeComments: true,
                removeEmptyAttributes: true
            }
        })
    ]
};