const gulp = require( 'gulp' );
const del = require( 'del' );
const global = require( './_config' );

gulp.task( 'clean', () => {
    del( [ global.paths.dist ] );
} );
