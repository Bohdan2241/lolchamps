import gulp from 'gulp';
import { deleteAsync } from 'del';
import sync from 'browser-sync';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import stylelint from 'gulp-stylelint';
import eslint from 'gulp-eslint-new';
import webpack from 'webpack';
import webpackStream from 'webpack-stream';
import webpackConfig from './webpack.config.cjs';

const sass = gulpSass(dartSass);

export const clean = () => deleteAsync('./dist');

export const scripts = (done) => {
  gulp.src('./src/scripts/main.js')
    .pipe(webpackStream(webpackConfig), webpack)
    .pipe(gulp.dest(['./src/scripts']))
    .pipe(gulp.dest(['./dist/scripts']));

  done();
};

export const lintScripts = () => gulp.src(['./src/**/*.js', '!src/scripts/**/*.min.js'])
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failAfterError(false));

export const lintStyles = () => gulp.src('./src/scss/**/*.scss')
  .pipe(stylelint({
    failAfterError: false,
    reporters: [
      {
        formatter: 'string',
        console: true,
      },
    ],
  }));

export const styles = async () => gulp.src('./src/scss/**/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('./src/css/'))
  .pipe(gulp.dest('./dist/css/'))
  .pipe(sync.stream());

export const copy = () => gulp.src([
  './src/*.html',
  './src/*.json',
  './src/*.ico',
  './src/CNAME',
  './src/*.ico',
])
  .pipe(gulp.dest('./dist/'));

// export const json = () => gulp.src('./src/*.json')
//   .pipe(gulp.dest('./dist/data'));

const reload = (done) => {
  sync.reload();
  done();
};

export const watch = () => {
  sync.init({
    server: {
      baseDir: './src',
    },
  });
  gulp.watch('./src/**/*.html').on('change', sync.reload);
  gulp.watch('./src/scss/**/*.scss', gulp.series(styles, lintStyles));
  gulp.watch(
    ['src/scripts/**/*.js', '!src/scripts/**/*.min.js'],
    gulp.series(scripts, lintScripts, reload),
  );
  gulp.watch('./src/data/*.json').on('change', sync.reload);
};

export const build = (cb) => gulp.series(
  clean,
  gulp.parallel(
    gulp.series(lintScripts, scripts),
    gulp.series(lintStyles, styles),
    copy,
  ),
)(cb);

export const dev = () => gulp.series(
  clean,
  gulp.parallel(
    gulp.series(lintScripts, scripts),
    gulp.series(lintStyles, styles),
  ),
  watch,
)();
