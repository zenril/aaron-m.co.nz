var path = require('path');
var webpack = require('webpack');
     
module.exports = {
    entry: {
        app : [
            path.join(__dirname, 'src/App.js') 
        ],
        vendor: [
            'history',
            'axios',
            'classset',
            'color',
            'react',
            'react-dom',
            'react-media',
            'react-router',
            'react-bootstrap',
            'react-remarkable',
            'react-router-dom',
        ]
    },
    output: {
        path: path.resolve(__dirname, 'public/js'),
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /(node_modules|bower_components)/,
                query: {
                    presets: [
                        'es2015', 'es2016', 'react'
                    ]
                }
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({ 
            name: 'vendor', 
            path: path.resolve(__dirname, 'public/js'),
            filename: 'vendor.bundle.js' 
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ],
    stats: {
        colors: true
    },
    devtool: 'source-map'
};