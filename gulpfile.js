import gulp from 'gulp';
import sync from 'browser-sync';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';

const sass = gulpSass(dartSass);

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
  gulp.watch('./src/*.html').on('change', sync.reload);
  gulp.watch('./src/scss/**/*.scss', styles);
};

export default gulp.series(
  styles,
  gulp.parallel(
    watch,
    server,
  ),
);
