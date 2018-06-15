const gulp = require( 'gulp' );

gulp.task( 'production', [
    'clean',
    'stylesheets',
    'copy'
    // todo implement template engine
] );

// Shortcut für production task
gulp.task( 'prod', [ 'production' ] );
