const gulp = require( 'gulp' );
const sass = require( 'gulp-sass' );
const sourcemaps = require( 'gulp-sourcemaps' );
const gulpif = require( 'gulp-if' );
const global = require( './_config' );

const sassConfig = {
    development: {},
    production: {
        options: {
            outputStyle: 'compressed'
        }
    }
};

gulp.task( 'sass', () => {
    const options = global.env.production ? sassConfig.production : sassConfig.development;

    gulp.src( `${global.paths.dev}/components/sass/main.scss` )
        .pipe( gulpif( !global.env.production, sourcemaps.init() ) )
        .pipe(
            sass( {
                importer: require( 'node-sass-globbing' ),
                ...options
            } ).on( 'error', sass.logError )
        )
        .pipe( gulpif( !global.env.production, sourcemaps.write( './' ) ) )
        .pipe( gulp.dest( `${global.paths.dist}/css` ) );
} );
