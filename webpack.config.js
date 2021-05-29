/*eslint-disable*/
const path = require('path');
module.exports/*eslint-enable*/ = {
    entry: './src/index.tsx',
    output: {
        /*eslint-disable*/path: path.resolve(__dirname ,'public'),/*eslint-enable*/
        filename: 'build/app.js',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },
    devServer: {
        port: 4444,
        historyApiFallback: true,
    },
    module: {
        rules: [{ test: /\.tsx?$/, loader: 'ts-loader' }],
    },
};
