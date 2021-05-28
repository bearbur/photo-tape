/*eslint-disable*/
module.exports/*eslint-enable*/ = {
    entry: './src/index.tsx',
    output: {
        /*eslint-disable*/path: __dirname + '/public',/*eslint-enable*/
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
