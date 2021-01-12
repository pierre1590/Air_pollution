const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');



module.exports = {
    mode: 'development',
    entry: ['./public/js/app.js', './public/css/style.css'],
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    },
    
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
              },
        ]
    },
    
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
        new Dotenv({}),
        
    ],   
}