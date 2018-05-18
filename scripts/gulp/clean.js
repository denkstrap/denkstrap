const gulp = require( 'gulp' );
const del = require( 'del' );
const global = require('./_config');

// todo configure or add other tasks for different clean actions? tbd
gulp.task( 'clean', () => {
    del( [ global.paths.dist ] );
} );
