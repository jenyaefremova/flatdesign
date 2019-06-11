var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var htmlmin = require('gulp-htmlmin');
var tinypng = require('gulp-tinypng-compress');

/*Сжатие и перенос css-файлов*/
gulp.task('minify-css', function (done) {
  return gulp.src('./src/css/*.css')
    .pipe(cleanCSS({
      compatibility: 'ie8'
    }))
    .pipe(gulp.dest('dist/css'))
  done();
});

/*Перенос js файлов*/
gulp.task('move-js', function (done) {
  return gulp.src('./src/js/*.js')
    .pipe(gulp.dest('dist/js'))
  done();
});

/*Сжатие html-файла*/
gulp.task('html-min', function (done) {
  return gulp.src('./src/*.html')
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(gulp.dest('dist'));
  done();
});
/*Перенос Шрифтов*/
gulp.task('fonts', function (done) {
  return gulp.src('./src/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'))
  done();
});
/*сжатие и перенос изображений*/
gulp.task('tinypng', function (done) {
  gulp.src('./src/img/**/*.{png,jpg,jpeg}')
    .pipe(tinypng({
      key: '8YKzfbM1hxXL09RQD2ToVzF90xAq9Gyc',
    }))
    .pipe(gulp.dest('dist/img/'));
  done();
});

/*Дефолтный таск*/
gulp.task('default', gulp.parallel('minify-css', 'move-js', 'html-min', 'fonts', 'tinypng', function (done) {
  done();
}));