module.exports = {
    entry: {
        test: './test.jsx',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]
    },
    output: {
        filename: '[name].js',
        path: __dirname
    },
    watchOptions: {
        poll: true
    },
    devtool: 'inline-source-map'
}
