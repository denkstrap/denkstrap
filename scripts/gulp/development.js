const gulp = require( 'gulp' );

gulp.task( 'development', [
    'clean',
    'stylesheets',
    'lint',
    'copy'
    // todo implement template engine
] );

// Shortcut für development task
gulp.task( 'dev', [ 'development' ] );
