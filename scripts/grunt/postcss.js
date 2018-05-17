/**
 * Grunt postcss plugin
 * https://github.com/nDmitry/grunt-postcss
 *
 * Rules for stylelint
 * https://github.com/stylelint/stylelint/blob/master/docs/user-guide/rules.md
 */

module.exports = {
    options: {
        processors: [
            require( 'autoprefixer' )( {
                browsers: [ 'last 2 versions', 'ie >= 11', 'Firefox >= 12', 'ios >= 7', 'android >= 4' ]
            } )
        ]
    },

    cssDevelopment: {
        options: {
            map: true
        },
        src: [ '<%= distPath %>css/*.css' ]
    },

    cssProduction: {
        options: {
            map: false
        },
        src: [ '<%= distPath %>css/*.css' ]
    }
};
