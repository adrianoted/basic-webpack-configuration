const path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

//= ===========// COMMON CONFIG //============//

const commonConfig = {
    entry: {
        index: './src/scripts/index.js',
        vendor: ['jquery', 'bootstrap']
    },
    output: {
        path: path.resolve(__dirname, '../public'),
        filename: 'js/[name].js'
    },
    // Create aliases to import or require certain modules more easily
    resolve: {
        alias: {
            'styles': path.resolve(__dirname, 'src/styles')
        }
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: ['babel-loader', 'eslint-loader']
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            title: 'Webpack starter frontend with jQuery and Bootstrap',
            inject: true // all javascripts will be placed at the bottom of body element
        }),
        // you can import the single component only when you need
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'windows.jQuery': 'jquery',
            Popper: ["popper.js", "default"],
            Alert: "exports-loader?Alert!bootstrap/js/dist/alert",
            Button: "exports-loader?Button!bootstrap/js/dist/button",
            Carousel: "exports-loader?Carousel!bootstrap/js/dist/carousel",
            Collapse: "exports-loader?Collapse!bootstrap/js/dist/collapse",
            Dropdown: "exports-loader?Dropdown!bootstrap/js/dist/dropdown",
            Modal: "exports-loader?Modal!bootstrap/js/dist/modal",
            Popover: "exports-loader?Popover!bootstrap/js/dist/popover",
            Scrollspy: "exports-loader?Scrollspy!bootstrap/js/dist/scrollspy",
            Tab: "exports-loader?Tab!bootstrap/js/dist/tab",
            Tooltip: "exports-loader?Tooltip!bootstrap/js/dist/tooltip",
            Util: "exports-loader?Util!bootstrap/js/dist/util"
        })
    ]
}

module.exports = commonConfig