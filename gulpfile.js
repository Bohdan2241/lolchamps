import gulp from 'gulp';
import { deleteAsync } from 'del';
import rename from 'gulp-rename';
import size from 'gulp-size';
import sync from 'browser-sync';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import stylelint from 'gulp-stylelint';
import cleanCss from 'gulp-clean-css';
import eslint from 'gulp-eslint-new';
import htmlmin from 'gulp-htmlmin';
import webpack from 'webpack';
import webpackStream from 'webpack-stream';
import webpackConfig from './webpack.config.cjs';

const sass = gulpSass(dartSass);

export const clean = () => deleteAsync('./dist');

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

export const scripts = (done) => {
  gulp.src('./src/scripts/main.js')
    .pipe(webpackStream(webpackConfig), webpack)
    .pipe(gulp.dest(['./src/scripts']))
    .pipe(gulp.dest(['./dist/scripts']))
    .pipe(size({
      title: 'scripts',
    }));
  done();
};

export const styles = async () => gulp.src('./src/scss/**/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(cleanCss())
  .pipe(rename({
    suffix: '.min',
  }))
  .pipe(gulp.dest('./src/css/'))
  .pipe(gulp.dest('./dist/css/'))
  .pipe(size({
    title: 'styles',
  }));

export const html = () => gulp.src(['src/**/*.html'])
  .pipe(
    htmlmin({
      collapseWhitespace: true,
    }),
  )
  .pipe(gulp.dest('dist/'))
  .pipe(
    size({
      title: 'html',
    }),
  );

export const copy = () => gulp.src([
  './src/*.json',
  './src/*.ico',
  './src/CNAME',
])
  .pipe(gulp.dest('./dist/'))
  .pipe(size({
    title: 'copy',
  }));

export const fonts = () => gulp.src([
  './src/fonts/**.*',
])
  .pipe(gulp.dest('./dist/fonts/'))
  .pipe(size({
    title: 'fonts',
  }));

const reload = (done) => {
  sync.reload();
  done();
};

export const watch = () => {
  sync.init({
    server: {
      baseDir: './src',
    },
    tunnel: true,
  });
  gulp.watch('./src/**/*.html').on('change', sync.reload);
  gulp.watch('./src/scss/**/*.scss', gulp.series(styles, lintStyles, reload));
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
    fonts,
  ),
  html,
)(cb);

export const dev = () => gulp.series(
  clean,
  gulp.parallel(
    gulp.series(lintScripts, scripts),
    gulp.series(lintStyles, styles),
  ),
  watch,
)();
