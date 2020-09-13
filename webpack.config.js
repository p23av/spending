const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');



module.exports = {
    entry: {
        index: './src/index.js',
        indexMin: './src/indexMin.js',
    },
    output: {
        filename: '[name]/bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    optimization: {
        minimizer: [
            new OptimizeCssAssetsPlugin({}),
            new UglifyJsPlugin({
                uglifyOptions: {
                    output: {
                        max_line_len: 255,
                    },
                },
            })
        ]
    },
    plugins: [
        new HTMLPlugin({
            filename: 'index.html',
            template: './src/index.html',
            inlineSource: '(index/bundle.js|indexstyle.css)$',
            chunks: ['index'],
            minify: {
                // collapseInlineTagWhitespace: true,
                // collapseWhitespace: true,
                // removeComments: true,
            }
        }),
        new HTMLPlugin({
            
            filename: 'indexMin.html',
            template: './src/indexMin.html',
            inlineSource: '(indexMin/bundle.js|indexMinstyle.css)$',
            chunks: ['indexMin'],
            minify: {
                collapseInlineTagWhitespace: true,
                collapseWhitespace: true,
                removeComments: true,
            }
        }),
        
        new MiniCssExtractPlugin(
            {
                filename: '[name]style.css'
            }
        ),
        new HtmlWebpackInlineSourcePlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ],
    },
}