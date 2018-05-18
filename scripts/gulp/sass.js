const gulp = require( 'gulp' );
const sass = require( 'gulp-sass' );
const sourcemaps = require( 'gulp-sourcemaps' );
const gulpif = require( 'gulp-if' );
const global = require( './_config' );

const sassConfig = {
    options: {
        importer: require( 'node-sass-globbing' )
    },
    development: {},
    production: {
        options: {
            importer: require( 'node-sass-globbing' ),
            outputStyle: 'compressed'
        }
    }
};

gulp.task( 'sass', () => {
    const options = global.env.production ? sassConfig.production : sassConfig.development;

    gulp.src( './src/components/sass/main.scss' )
        .pipe( gulpif( !global.env.production, sourcemaps.init() ) )
        .pipe(
            sass( {
                ...sassConfig.options,
                ...options
            } ).on( 'error', sass.logError )
        )
        .pipe( gulpif( !global.env.production, sourcemaps.write( './' ) ) )
        .pipe( gulp.dest( './dist/css' ) );
} );
