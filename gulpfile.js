var gulp = require('gulp'),
    gulpLoadPlugins = require('gulp-load-plugins'),
    plugins = gulpLoadPlugins(),
    glob = require('glob');

gulp.task('css', function () {
	gulp.src('css/*.css')
	   .pipe(plugins.autoprefixer('last 2 version', 'ie 8', 'ie 9'))
      .pipe(plugins.concat("style.css"))
      .pipe(plugins.minifyCss())
	   .pipe(gulp.dest('build'));
});

gulp.task('js', function () {
   return gulp.src('js/*.js')
      .pipe(plugins.jshint())
      .pipe(plugins.jshint.reporter('jshint-stylish'))
      .pipe(plugins.uglify())
      .pipe(plugins.concat('app.js'))
      .pipe(gulp.dest('build'));
});

gulp.task('images', function(cb) {
    gulp.src('images/**/*.+(png|jpg|gif|jpeg)')
	    .pipe(plugins.imageOptimization({
	        optimizationLevel: 5,
	        progressive: true,
	        interlaced: true
	    }))
	    .pipe(gulp.dest('images'))
});

gulp.task('watch', function () {
   gulp.watch(['js/*.js', 'css/*.css', 'images/*'], ['js', 'css', 'images', function() {

   }]);
});