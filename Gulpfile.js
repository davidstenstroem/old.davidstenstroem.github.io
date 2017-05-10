const gulp = require('gulp');
const sass = require('gulp-sass');
const prefixer = require('gulp-autoprefixer');

var sassOptions = {
  errLogToConsole: true,
  outputStyle: 'compressed'
};

gulp.task('sass', function(){
  return gulp.src('./sass/**/*.scss')
  .pipe(sass(sassOptions).on('error', sass.logError))
  .pipe(prefixer())
  .pipe(gulp.dest('./css'))
});

gulp.task('watch', function(){
  return gulp.watch('./sass/**/*.scss', ['sass'])
  .on('change', function(event){
    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
  });
});

gulp.task('default', ['sass', 'watch']);
