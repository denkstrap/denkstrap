const gulp = require( 'gulp' );
const gulpif = require( 'gulp-if' );
const postcss = require( 'gulp-postcss' );
const sourcemaps = require( 'gulp-sourcemaps' );
const autoprefixer = require( 'autoprefixer' );
const global = require( './_config' );

gulp.task( 'postcss', [ 'autoprefixer' ] );

gulp.task( 'autoprefixer', () => {
    gulp.src( `${global.paths.dist}/css` )
        .pipe( gulpif( !global.env.production, sourcemaps.init() ) )
        .pipe(
            postcss( [
                autoprefixer( {
                    browsers: [ 'last 2 versions', 'ie >= 11', 'Firefox >= 12', 'ios >= 7', 'android >= 4' ]
                } )
            ] ) )
        .pipe( gulpif( !global.env.production, sourcemaps.write( './' ) ) )
        .pipe( gulp.dest( `${global.paths.dist}/css` ) );
} );
