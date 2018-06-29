const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        app: './src/index.js'
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Code Splitting'
        }),
    ],
    output: {
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    // optimization: {    //去除重复代码
    //     splitChunks: {
    //         cacheGroups: {
    //             commons: {
    //                 name: "commons",
    //                 chunks: "initial",
    //                 minChunks: 2
    //             }
    //         }
    //     }
    // },
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
}