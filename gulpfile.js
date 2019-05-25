const gulp = require('gulp');
const cssnano = require('gulp-cssnano');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const ts = require('gulp-typescript');

gulp.task('scss', function(){
    return gulp.src('app/scss/main.scss')
       .pipe(sass())
       .pipe(cssnano())
       .pipe(gulp.dest('css'));
 });
 

 gulp.task('ts', function(){
    return gulp.src(['app/js/plugins/*.ts', 'app/js/*.ts'])
        .pipe(ts({
            noImplicitAny: true,
            outFile: 'all.js'
        }))
        .pipe(concat('all.js'))
        .pipe(gulp.dest('js'));
});

gulp.task('watch', function() {
    gulp.watch('app/scss/*.scss', gulp.series('scss'));
    gulp.watch('app/js/*.ts', gulp.series('ts'));
  });