module.exports = {
    devtool: 'eval-source-map',
    module: {
        rules: [
            {
                test: /\.(js)$/,
                enforce: 'pre',
                exclude: /(node_modules|__*\.js)/,
                use: [
                    'eslint-loader',
                ]
            }
        ]
    }
};
