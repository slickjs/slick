const gulp = require('gulp'),
    webpack = require('webpack-stream'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    tsc = require('gulp-typescript'),
    merge = require('merge2'),
    babel = require('gulp-babel');


gulp.task('typescript', () => {
    let project = tsc.createProject('tsconfig.json', {
        declaration: true
    });

    let result = gulp.src('./src/*.ts')
        .pipe(project());



    return merge([
        result.js.pipe(babel({
            presets: ['es2015']
        })).pipe(gulp.dest('lib')),
        result.dts.pipe(gulp.dest('lib'))
    ]);

})

gulp.task('webpack', () => {

    return gulp.src('lib/index.js')
        .pipe(webpack({
            resolve: {
                extensions: ['', '.js', '.ts'],
            },
            module: {
                loaders: [{
                    test: /\.ts(x?)$/,
                    loader: 'babel-loader?presets[]=es2015!ts-loader'
                }, {
                    test: /\.js(x?)$/,
                    loader: 'babel-loader?presets[]=es2015'
                }]
            },
            output: {
                library: "slick",
                libraryTarget: "umd",
                filename: 'slick.js'
            },

        }))
        .on('error', function () {
            this.emit('end');
        })
        .pipe(gulp.dest('dist'))

});

gulp.task('uglify', ['webpack'], () => {
    gulp.src('dist/slick.js')
        .pipe(uglify())
        .pipe(rename('slick.min.js'))
        .pipe(gulp.dest('dist'))
})

gulp.task('watch', () => {
    gulp.watch('src/**/*.ts', ['webpack']);
});


gulp.task('default', ['webpack', 'typescript', 'uglify']);