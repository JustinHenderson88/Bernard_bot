// Initialize packages
const gulp = require('gulp');
const babel = require('gulp-babel');
const sourcemaps = require('gulp-gourcemaps');

//define js-babel task runner
gulp.task('js-babel', ()=>{
    // set react src-files at js/app/index.js for now
    return gulp.src([
        __dirname + './js/app/index.js'
    ])
    // embed source maps
    .pipe(sourcemaps.init())
    //
    .pipe(babel({
        presets: [
            'es2015'
        ]
    })
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/app'));
})