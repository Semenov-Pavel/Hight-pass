const {src, dest, series, watch} = require('gulp');

const concat = require('gulp-concat');
const htmlMin = require('gulp-htmlmin');
const autoprefixer = require('gulp-autoprefixer');
const cleanCss = require('gulp-clean-css');
const image = require('gulp-image');
const sass = require('gulp-sass')(require('sass'));
const del = require('del');
const browserSync = require('browser-sync').create();

const clean = () => {
    return del('dist')
};

const scripts = () => {
    return src('src/js/**/*.js')
    .pipe(dest('dist/js'))
    .pipe(browserSync.stream())
};

const fonts = () => {
    return src('src/fonts/**/*.*')
    .pipe(dest('dist/fonts'))
};

const styles = () => {
    return src('src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('style.css'))
    .pipe(autoprefixer({
        cascade: false,
    }))
    .pipe(cleanCss({
        level: 2,
    }))
    .pipe(dest('dist/css'))
    .pipe(browserSync.stream())
};

const htmlMinify = () => {
    return src('src/**/*.html')
    .pipe(htmlMin({
        collapseWhitespace: true,
    }))
    .pipe(dest('dist'))
    .pipe(browserSync.stream())
};

const images = () => {
    return src([
        'src/img/**/*.jpg',
        'src/img/**/*.png',
        'src/img/**/*.svg',
        'src/img/**/*.jpeg'
    ])
    .pipe(image())
    .pipe(dest('dist/img'))
};

const watchFiles = () => {
    browserSync.init({
        server: {
            baseDir: 'dist'
        }
    })
};

watch('src/**/*.html', htmlMinify);
watch('src/scss/**/*.scss', styles);
watch('src/js/**/*.js', scripts);

exports.default = series(clean, htmlMinify, styles, images, scripts, fonts, watchFiles);