const path = require('path');

module.exports = {
    entry: './src/playground/expensify-redux.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module:{
        rules:[
            {
                loader: 'babel-loader',
                test:/\.js$/,
                exclude: /node_modules/
            },
            {
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ],
                test:/\.s?css$/
            }
        ]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        historyApiFallback: true
    }
};