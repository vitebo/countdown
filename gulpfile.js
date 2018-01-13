var gulp = require( 'gulp' );
var pug = require( 'gulp-pug' );

gulp.task( 'views', function buildHTML() {
  return gulp.src( './src/*.pug' )
             .pipe( pug({
               opts: {
                client: false
               }
             }) )
             .pipe( gulp.dest( './src' ) )
} );
