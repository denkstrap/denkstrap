const requireDir = require( 'require-dir' );
const gulp = require( 'gulp' );

require( 'gulp-stats' )( gulp );

requireDir( './scripts/gulp', {
    recurse: true
} );
