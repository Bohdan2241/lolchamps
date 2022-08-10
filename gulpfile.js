import gulp from 'gulp';
import sync from 'browser-sync';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import stylelint from 'gulp-stylelint';
import eslint from 'gulp-eslint-new';

const sass = gulpSass(dartSass);

export const lintScripts = () => gulp.src('./src/**/*.js')
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
  .pipe(sync.stream());

export const server = () => {
  sync.init({
    server: {
      baseDir: './src',
    },
  });
};

export const watch = () => {
  gulp.watch('./src/**/*.html').on('change', sync.reload);
  gulp.watch('./src/scss/**/*.scss', gulp.series(styles, lintStyles));
  gulp.watch('./src/**/*.js', lintScripts).on('change', sync.reload);
  gulp.watch('./src/data/*.json').on('change', sync.reload);
};

export default gulp.series(
  styles,
  lintStyles,
  lintScripts,
  gulp.parallel(
    watch,
    server,
  ),
);
