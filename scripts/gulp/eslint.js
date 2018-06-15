const gulp = require( 'gulp' );
const global = require( './_config' );
const eslint = require( 'gulp-eslint' );

gulp.task( 'eslint', () => {
    return gulp.src( [ '**/*.js', '!node_modules/**' ] )
        .pipe( eslint() )
        .pipe( eslint.format() )
        .pipe( eslint.failAfterError() );
} );


gulp.task( 'lint', [ 'eslint', 'stylelint' ] );
