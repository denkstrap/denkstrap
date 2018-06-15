const gulp = require( 'gulp' );
const global = require( './_config' );

gulp.task( 'copy', () => {
    gulp.src( [ `${global.paths.dev}/static/**/*` ] )
        .pipe( gulp.dest( `${global.paths.dist}/static` ) );
} );
