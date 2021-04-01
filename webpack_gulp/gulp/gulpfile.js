const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('watch', function(){
  gulp.watch('app/scss/**/*.scss', gulp.series('sass')); 
})

gulp.task('sass', function(){
  return gulp.src('app/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
});