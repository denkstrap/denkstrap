const merge = require( 'webpack-merge' );
const baseConfig = require( './scripts/webpack/base.config' );
const ENV = process.env.NODE_ENV || 'development';

let envConfig;

try {
    envConfig = require( './scripts/webpack/' + ENV + '.config' );
} catch ( error ) {
    envConfig = {};
}

module.exports = merge( baseConfig, envConfig );
