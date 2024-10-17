import gulp from 'gulp';
import browserSync from 'browser-sync';
import gulpSass from 'gulp-sass';
import dartSass from 'sass';
import rename from 'gulp-rename';
import autoprefixer from 'gulp-autoprefixer';
import cleanCss from 'gulp-clean-css';

// Инициализируем gulp-sass с Dart Sass
const compileSass = gulpSass(dartSass);

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
        .pipe(compileSass({ outputStyle: 'compressed' }).on('error', compileSass.logError))
        .pipe(rename({ suffix: '.min' }))
        .pipe(autoprefixer())
        .pipe(cleanCss({ compatibility: 'ie8' }))
        .pipe(gulp.dest('src/css'))
        .pipe(browserSync.stream());
});

// Watcher
gulp.task('watch', function() {
    gulp.watch('src/scss/**/*.+(scss|sass)', gulp.parallel('styles'));
    gulp.watch('src/*.html').on('change', browserSync.reload);
    gulp.watch('src/js/*.js').on('change', browserSync.reload);
});

gulp.task('default', gulp.parallel('watch', 'server', 'styles'));


