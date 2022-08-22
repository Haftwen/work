// 通过commonjs规范去导出一个配置项
const path = require('path') // 引入拼接绝对路径
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
        path: path.join(__dirname, 'lib'),
        filename: 'lib.js',
        clean: true,
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        })
    ],
    module: {
        rules: [{
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            url: false
                        }
                    }
                ]
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.(png|jpg|gif|jpeg)$/i,
                // 值为asset/resource这个 会把图片打包成单独的文件
                // type: 'asset/resource',
                type: 'asset',
                generator: {
                    filename: 'images/[name]-[hash:6][ext]'
                },
                parser: {
                    dataUrlCondition: {
                        maxSize: 2 * 1024
                    }
                }
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name]-[hash:10][ext]'
                }
            },
            //    高版本语法兼容低版本浏览器
            {
                test: /\.js$/,
                use: ['babel-loader']
            }
        ]
    },
    devServer: {
        open: true,
        port: 30000
    },
}