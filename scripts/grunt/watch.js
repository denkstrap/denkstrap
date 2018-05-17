/**
 * Grunt Watch plugin
 * https://github.com/gruntjs/grunt-contrib-watch
 */
module.exports = {
    options: {
        spawn: false,
        livereload: true,
        atBegin: true
    },

    sass: {
        options: {
            event: [ 'added', 'deleted', 'changed' ]
        },
        files: [
            '<%= srcPath %>**/*.scss'
        ],
        tasks: [
            'newer:stylelint:scss',
            'sass:development',
            'postcss:cssDevelopment'
        ]
    },

    html: {
        files: [
            '<%= srcPath %>components/**/*.njs'
        ],
        tasks: [
            'nunjuckr:development'
        ]
    }

};
