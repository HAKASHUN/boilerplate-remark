var gulp = require('gulp');
var webserver = require('gulp-webserver');

gulp.task('server', function () {
    gulp.src('src')
        .pipe(webserver({
            livereload: true,
            open: true
        }));
});
