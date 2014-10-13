var gulp = require('gulp');
var minifyHTML = require('gulp-minify-html');

gulp.task('hello', function() {
    console.log('Hello, Gulp!');
});

gulp.task('minify-html', function() {
    var opts = {
        comments: true,
        spare: true
    };

    gulp.src('./*.html')
        .pipe(minifyHTML(opts))
        .pipe(gulp.dest('./dist/'))
});

// Watch task
gulp.task('watch', function () {
    gulp.watch('./*.html', ['minify-html']);
});

gulp.task('prd', ['hello', 'minify-html'])