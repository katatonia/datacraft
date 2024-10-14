const gulp         = require('gulp');
const browserSync  = require('browser-sync');
const sass         = require('gulp-sass')(require('sass'));
const rename       = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');
const cleanCss     = require('gulp-clean-css');

// Server
gulp.task('server', function() {
    browserSync({
        server: {
            baseDir: 'src'
        }
    });
});

// Styles
gulp.task('styles', function() {
    return gulp.src('src/scss/**/*.+(scss|sass)')
            .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
            .pipe(rename({
                prefix: '',
                suffix: '.min',
              }))
            .pipe(autoprefixer())
            .pipe(cleanCss({compatibility: 'ie8'}))
            .pipe(gulp.dest('src/css'))
            .pipe(browserSync.stream());
})

// Watcher
gulp.task('watch', function() {
    gulp.watch('src/scss/**/*.+(scss|sass)', gulp.parallel('styles'));
    gulp.watch('src/*.html').on('change', browserSync.reload);
    gulp.watch('src/js/*.js').on('change', browserSync.reload);
});


gulp.task('default', gulp.parallel('watch', 'server', 'styles'));
