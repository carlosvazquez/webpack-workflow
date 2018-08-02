/* eslint-disable */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Is the current build a development build
const config = {
    isDev: (process.env.NODE_ENV === 'dev'),
    dirNode: 'node_modules',
    dirApp: path.join(__dirname, 'app'),
    dirAssets: path.join(__dirname, 'assets')
}

/**
 * Webpack Configuration
 */
module.exports = {
    entry: {
        vendor: [
            'lodash'
        ],
        bundle: path.join(config.dirApp, 'index')
    },
    resolve: {
        modules: [
            config.dirNode,
            config.dirApp,
            config.dirAssets
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            isDev: config.isDev
        }),

        new HtmlWebpackPlugin({
            title: "Test Frontend",
            minify:{
                collapseWhitespace: false
            },
            hash: true,
            template: path.join(__dirname, '/src/index.pug')
        })
    ],
    module: {
        rules: [
            // BABEL
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /(node_modules)/,
                options: {
                    compact: true
                }
            },

            // STYLES
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: config.isDev
                        }
                    },
                ]
            },

            // PUG
            {
                test: /\.pug$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {}
                    },
                    {
                        loader: 'pug-html-loader',
                        options: { pretty: true }
                    }
                ]
            },

            // CSS / SASS
            {
                test: /\.scss/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: config.isDev
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: config.isDev,
                            includePaths: [config.dirAssets]
                        }
                    }
                ]
            },

            // IMAGES
            {
                test: /\.(jpe?g|png|gif)$/,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]'
                }
            }
        ]
    }
};
