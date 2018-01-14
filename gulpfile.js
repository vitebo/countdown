var gulp = require( 'gulp' ),
    pug = require( 'gulp-pug' ),
    connect = require( 'gulp-connect' );

gulp.task( 'pug', function() {
  gulp.src( './src/*.pug' )
      .pipe( pug() )
      .pipe( gulp.dest( './src' ) )
      .pipe( connect.reload() );
} );

gulp.task( 'connect', function() {
  connect.server( {
    root: './src',
    livereload: true
  } );
} );

gulp.task( 'watch', function() {
  gulp.watch( [ './src/*.pug', './src/*/*.pug' ], [ 'pug' ] );
} );

gulp.task( 'server', [ 'connect', 'watch' ] );
