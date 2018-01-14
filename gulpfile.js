var gulp = require( 'gulp' ),
    pug = require( 'gulp-pug' ),
    connect = require( 'gulp-connect' ),
    ghPages = require('gulp-gh-pages');

gulp.task( 'pug', function() {
  gulp.src( './src/*.pug' )
      .pipe( pug() )
      .pipe( gulp.dest( './src' ) )
      .pipe( connect.reload() );
} );

gulp.task( 'ghPages', function() {
  gulp.src( './src/**/*.*' )
      .pipe( ghPages() );
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

gulp.task( 'deploy', [ 'pug', 'ghPages' ] );
