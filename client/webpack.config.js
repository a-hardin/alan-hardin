const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

var extractPlugin = new ExtractTextPlugin({
    filename: 'main.css'
});

const port = process.env.PORT || 3000;

module.exports = {
  // Webpack configuration goes here
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  
  module: {
    rules: [
        {
            test: /\.js$/,
            exclude: /(node_modules|bower_compontents)/,
            use: [
                {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }
            ]
        },
        {
            test: /\.css$/,
            use: extractPlugin.extract({
                use: ['css-loader']
            })
        },
        {
            test: /\.html$/,
            use: ['html-loader']
        },
        {
            test: /\.(jpg|png|jpeg)$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'img/',
                        publicPath: 'src/img/'
                    }
                }
            ]
        }
    ]
    },
    plugins: [
        extractPlugin,
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new CleanWebpackPlugin(['dist'])
    ],
    devtool: 'inline-source-map',
};