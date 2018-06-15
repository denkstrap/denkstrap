// fallback env to development if NODE_ENV is undefined
const env = process.env.NODE_ENV || 'development';

module.exports = {
    paths: {
        dev: './src',
        dist: './dist',
        build: './build'
    },
    env: {
        development: env !== 'production',
        production: env === 'production'
    }
};
