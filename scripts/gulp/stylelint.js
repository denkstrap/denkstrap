const gulp = require( 'gulp' );
const global = require( './_config' );
const stylelint = require( 'gulp-stylelint' );

gulp.task( 'stylelint', () => {
    return gulp.src( [
        global.paths.dev + '/**/*.scss',
        `!${global.paths.dev}/**/vendor/**/*.scss`,
        `!${global.paths.dev}/**/functions/map/**/*.scss`
    ] )
        .pipe( stylelint( {
            reporters: [
                {formatter: 'string', console: true}
            ]
        } ) );
} );
