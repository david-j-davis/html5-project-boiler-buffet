// Include gulp
var gulp = require('gulp');

//Export gulp for dev tools
module.exports = gulp;

var compass = require('gulp-compass');
var browserSync = require('browser-sync').create();
var server = '';

// Scripts
gulp.task('scripts', function () {
    return gulp.src('js/**/*.js')

});

// Compile Sass with compass
gulp.task('styles', function() {
  gulp.src('sass/*.scss')
    .pipe(compass({
      config_file: 'config.rb',
      css: 'css',
      sass: 'sass'
    }))
   // .pipe(scsslint())
    .pipe(gulp.dest('css'))
    .pipe(browserSync.stream());
});;

gulp.task('html', function() {
  gulp.src('*.html')
   // .pipe(livereload());
  .pipe(browserSync.stream());
});


// Watch Files For Changes
gulp.task('serve', ['styles', 'scripts', 'html'], function() {
    browserSync.init({
        proxy: server
    });
    gulp.watch('sass/**/*.scss', ['styles']);
    gulp.watch('js/**/*.js', ['scripts']);
    //gulp.watch('*.html', ['html']);
    gulp.watch('*.html').on('change', browserSync.reload);
});

// Default task
//gulp.task('default', ['styles', 'scripts', 'html', 'watch']);
gulp.task('default', ['serve']);
