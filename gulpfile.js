var gulp = require('gulp'),
    sass = require('gulp-sass'),
    rename = require("gulp-rename"),
    concat = require('gulp-concat');

var sources = {
    sass: ['./app/**/*.scss'],
    html: ['./app/index.html', './app/components/**/*.html'],
    js: ['./app/js/**/*.js', './app/components/**/*.js']
};

gulp.task('sass', function () {

    gulp.src('./app/scss/app.scss')
        .pipe(sass())
        .on('error', function (err) {
            console.log(err.message);
        })
        .pipe(rename('app.min.css'))
        .pipe(gulp.dest('./app/dist/'));
});

gulp.task('html', function(){
    gulp.src( sources.html );
});

gulp.task('js', function(){
    gulp.src( sources.js )
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest('./app/dist'));
});

gulp.task('json', function(){
    console.log(sources.json);
    gulp.src( sources.json );
});

gulp.task('watch', function(){
    gulp.watch(sources.sass, ['sass']);
    gulp.watch(sources.html, ['html']);
    gulp.watch(sources.js, ['js']);
});

gulp.task('default', [
    'js',
    'sass',
    'watch'
]);