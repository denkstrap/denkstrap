const uglifyjsWebpackPlugin = require( 'uglifyjs-webpack-plugin' );

module.exports = {

    devtool: 'cheap-source-map',

    plugins: [
        new uglifyjsWebpackPlugin()
    ]

};
