/**
 * Grunt copy plugin
 * https://github.com/gruntjs/grunt-contrib-copy/
 */

module.exports = {
    static: {
        expand: true,
        cwd: '<%= srcPath %>static/',
        src: [
            '**/*.*'
        ],
        dest: '<%= distPath %>static/'
    }
};
