import rename from 'gulp-rename';
import sass from 'gulp-sass';
import gulp from 'gulp';
import del from 'del';

const paths = {
  styles: {
    src: 'src/**/*.scss',
    dest: 'dist/'
  },
  scripts: {
    src: 'src/script/**/*.ts',
    dest: 'dist/'
  }
};

const renameOptions = { prefix: 'ixm.' };
const scssOptions = { }//outputStyle: 'compressed' };

// Tasks
export function clean () { return del(['dist/']); }

export function watch () {
  gulp.watch(paths.scripts.src, scripts);
  gulp.watch(paths.styles.src, gulp.series(styles));
}

export function scripts () {
  return gulp.src(paths.scripts.src)
    .pipe(gulp.dest(paths.scripts.dest));
}

export function styles () {
  return gulp.src(paths.styles.src)
    .pipe(sass(scssOptions).on('error', sass.logError))
    .pipe(rename(renameOptions))
    .pipe(gulp.dest(paths.styles.dest));
}


export const build = gulp.series(clean, gulp.parallel(styles, scripts));
export default build
