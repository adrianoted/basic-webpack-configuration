const path = require('path'),
      webpack = require('webpack'),
      merge = require('webpack-merge'),
      commonConfig = require('./webpack.common.js'),
      BrowserSyncPlugin = require('browser-sync-webpack-plugin')

const devConfig = merge(commonConfig, {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    watch: true,
    module: {
        rules: [{
            test: /\.scss$/,
            exclude: /node_modules/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        }]
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'src'),
        compress: true,
        hot: true,
        port: 7100,
        stats: 'errors-only',
        clientLogLevel: 'warning'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 8100,
            proxy: 'http://localhost:7100/',
            files: [{
                match: ['**/*.html'],
                // fn: function(event, file) {
                fn: function (event) {
                    if (event === 'change') {
                        const bs = require('browser-sync').get('bs-webpack-plugin')
                        bs.reload()
                    }
                }
            }]
        }, { reload: false })
    ]
})

module.exports = devConfig
