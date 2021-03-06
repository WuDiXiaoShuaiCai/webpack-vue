const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        app: './src/index.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    mode: 'production', //压缩输出，内部调用UglifyJsPlugin   或者   命令行使用--optimize-minimize标记
    devtool: 'inline-source-map',   //source map追踪错误
    devServer: {
        contentBase: './dist',
        hot: true
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),  //构建之前先清空
        new HtmlWebpackPlugin({ //根据入口文件与title自动生成index.html，对已有html进行覆盖
            title: 'test'
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',  //Minify PNG, JPEG, GIF, SVG and WEBP images with imagemin
                        options: {
                          bypassOnDebug: true, // webpack@1.x
                          disable: true, // webpack@2.x and newer
                          mozjpeg: {
                            progressive: true,
                            quality: 65
                          },
                          // optipng.enabled: false will disable optipng
                          optipng: {
                            enabled: false,
                          },
                          pngquant: {
                            quality: '65-90',
                            speed: 4
                          },
                          gifsicle: {
                            interlaced: false,
                          },
                          // the webp option will enable WEBP
                          webp: {
                            quality: 75
                          }
                        },
                      },
                ]
           },
           {
              test: /\.(woff|woff2|eot|ttf|otf)$/,  //字体
              use: [
                'file-loader'
              ]
            },                                     //数据
            { 
                test: /\.(csv|tsv)$/,
                use: [
                  'csv-loader'
                ]
            },
            {
                test: /\.xml$/,
                use: [
                  'xml-loader'
                ]
            }
        ]
    }
};