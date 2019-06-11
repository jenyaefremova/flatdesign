var gulp = require('gulp');

gulp.task('defolt', defaultTask);

function defaultTask(cb) {
  console.log('Работает?');
  cb();
}

