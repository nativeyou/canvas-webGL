const gulp = require('gulp')
const connect = require('gulp-connect')
const open = require('gulp-open')

const rollup = require('rollup')
const commonjs = require('@rollup/plugin-commonjs')
const typescript = require('@rollup/plugin-typescript')

const rollupOp = {
    input: './scripts/index.ts',
    plugins: [
        commonjs(),
        typescript({
            lib: ["es5", "es6", "dom"],
            target: 'es5'
        })
    ]
}

gulp.task('build', function (cb) {
    rollup.rollup(rollupOp)
        .then(bundle => bundle.write({
            file: './src/js/index.js',
            format: 'umd',
            name: 'WebGL'
        }))
        .then(() => cb && cb())
        .catch(error => cb && cb())
})

gulp.task('watch', function (cb) {
    gulp.watch('./scripts/*.ts', gulp.series('build', 'reload'))
    cb && cb()
})

gulp.task('connect', function (cb) {
    connect.server({
        root: ['./src/'],
        livereload: true,
        port: 3000,
        host: '127.0.0.1'
    })
    cb && cb()
})

gulp.task('open', function (cb) {
    gulp.src('./src/index.html')
        .pipe(open({ uri: 'http://127.0.0.1:3000'}))

    cb && cb()
})

gulp.task('reload', function () {
    return gulp.src('./src/index.html').pipe(connect.reload())
})

gulp.task('default', gulp.series('watch', 'connect', 'open'))