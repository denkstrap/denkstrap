const gulp = require( 'gulp' );
const gulpif = require( 'gulp-if' );
const postcss = require( 'gulp-postcss' );
const sourcemaps = require( 'gulp-sourcemaps' );
const autoprefixer = require( 'autoprefixer' );
const global = require( './_config' );

const postcssConfig = {
    autoprefixer: {
        options: {
            browsers: [ 'last 2 versions', 'ie >= 11', 'Firefox >= 12', 'ios >= 7', 'android >= 4' ]
        }
    }
};

gulp.task( 'postcss', ['autoprefixer'] );

gulp.task( 'autoprefixer', () => {
    gulp.src( './dist/css/main.css' )
        .pipe( gulpif( !global.env.production, sourcemaps.init() ) )
        .pipe(
            postcss( [
                autoprefixer( postcssConfig.autoprefixer.options )
            ] ) )
        .pipe( gulpif( !global.env.production, sourcemaps.write( './' ) ) )
        .pipe( gulp.dest( './dist/css' ) );
} );
