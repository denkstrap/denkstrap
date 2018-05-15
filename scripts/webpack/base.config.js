const path = require( 'path' );
const webpack = require( 'webpack' );

module.exports = {

    entry: [
        'regenerator-runtime/runtime',
        './src/components/app/main.js'
    ],

    output: {
        path: path.resolve( './dist/js' ),
        publicPath: 'js/',
        filename: '[name].bundle.js'
    },

    devtool: 'eval-source-map',

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|__*\.js)/,
                use: [
                    'cache-loader',
                    'babel-loader'
                ]
            }
        ]
    },

    plugins: [
        new webpack.IgnorePlugin( /\.(scss|css|njs)$/ )
    ],

    resolve: {
        alias: {
            components: path.resolve( './src/components' ),
            modules: path.resolve( './src/components/modules' ),
            patterns: path.resolve( './src/components/patterns' )
        }
    }

};
