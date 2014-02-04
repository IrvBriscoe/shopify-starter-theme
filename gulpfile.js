var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    notify = require('gulp-notify'),
    livereload = require('gulp-livereload'),
    lr = require('tiny-lr'),
    server = lr();
    
gulp.task('default', function(){
	return gulp.src('assets/_scss/style.scss')
	    .pipe(sass({ style: 'expanded' }))
	    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
	    .pipe(gulp.dest('assets/'))
	    .pipe(rename({suffix: '.max'}))
	    .pipe(minifycss())
	    .pipe(rename({suffix: ''}))
	    .pipe(gulp.dest('assets/'))
	    .pipe(livereload(server));
});

gulp.task('watch', function() {
  // Listen on port 35729
  server.listen(35729, function (err) {
      if (err) {
        return console.log(err)
      };
  
      // Watch .scss files
      gulp.watch('assets/**/*.scss', ['default']);
  
    });

});