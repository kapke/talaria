var gulp = require('gulp'),
    ts = require('gulp-typescript'),
    merge = require('merge2'),
    browserify = require('gulp-browserify'),
    concat = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps'),
    src = ['lib/*.ts', 'lib/**/*.ts', 'typings/**/*.ts'],
    testsSrc = ['spec/*.ts', 'spec/**/*.ts', 'typings/**/*.ts'],
    testsDest = 'spec',
    dest = {
        definitions: 'definitions',
        commonjs: 'dist/commonjs',
        amd: 'dist/amd',
        browser: 'dist/browser',
        lib: 'lib',
        single: {
            dir: 'dist',
            fileName: 'talaria.js'
        }
    };

function buildDefinitions () {
    return gulp
        .src(src)
        .pipe(ts({
            typescript: require('typescript'),
            declarationFiles: true,
            noExternalResolve: true,
            module: 'commonjs',
            target: 'ES5'
        }))
        .dts
        .pipe(gulp.dest(dest.definitions));
}

function buildCommonJs () {
    return gulp
        .src(src)
        .pipe(sourcemaps.init())
        .pipe(ts({
            typescript: require('typescript'),
            module: 'commonjs',
            target: 'ES5'
        }))
        .js
        .pipe(gulp.dest(dest.commonjs))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(dest.lib));
}

function buildAmd () {
    return gulp
        .src(src)
        .pipe(sourcemaps.init())
        .pipe(ts({
            typescript: require('typescript'),
            module: 'amd',
            target: 'ES5'
        }))
        .js
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(dest.amd));
}

function buildSingle () {
    return gulp
        .src(src)
        .pipe(sourcemaps.init())
        .pipe(ts({
            typescript: require('typescript'),
            module: 'commonjs',
            target: 'ES5'
        }))
        .js
        .pipe(browserify({}))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(dest.browser))
        .pipe(concat(dest.single.fileName))
        .pipe(gulp.dest(dest.single.dir));
}

function buildTests () {
    return gulp
        .src(testsSrc)
        .pipe(sourcemaps.init())
        .pipe(ts({
            typescript: require('typescript'),
            module: 'commonjs',
            target: 'ES5',
            sourceMap: true
        }))
        .js
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(testsDest));
}

gulp.task('build-dist', function () {
    return merge([
        buildCommonJs(),
        buildDefinitions(),
        buildAmd(),
        buildSingle(),
        buildTests()
    ]);
});
gulp.task('build-dev', function () {
    return merge([
        buildCommonJs(),
        buildTests()
    ]);
});