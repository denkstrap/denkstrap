const env = process.env.NODE_ENV;

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
