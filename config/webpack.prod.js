const merge = require('webpack-merge'),
    commonConfig = require('./webpack.common.js'),
    MiniCssExtractPlugin = require('mini-css-extract-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin')

const prodConfig = merge(commonConfig, {
    mode: 'production',
    stats: {
        colors: true,
        hash: true,
        assets: true,
        chunks: true,
        chunkModules: true,
        modules: true
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                default: false,
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendor",
                    chunks: 'all',
                    minChunks: 2
                }
            }
        }
    },
    module: {
        rules: [{
            test: /\.(sa|sc|c)ss$/,
            exclude: /node_modules/,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
        }]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
            chunkFilename: '[id].css'
        })
    ]
})

module.exports = prodConfig