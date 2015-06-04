var gulp = require('gulp'),
    ts = require('gulp-typescript'),
    merge = require('merge2'),
    watch = require('gulp-watch'),
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

function buildCommonJs (dist) {
   var stream = gulp.src(src);
   if(!dist) {
       stream = stream.pipe(sourcemaps.init())
   }
   stream = stream.pipe(ts({
        typescript: require('typescript'),
        module: 'commonjs',
        target: 'ES5'
    })).js;
    if(dist) {
        stream = stream.pipe(gulp.dest(dest.commonjs));
    } else {
        stream = stream
            .pipe(sourcemaps.write())
            .pipe(gulp.dest(dest.lib));
    }
    return stream;
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
        .pipe(gulp.dest(dest.amd));
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
        buildCommonJs(true),
        buildDefinitions(),
        buildAmd()
    ]);
});
gulp.task('build-dev', function () {
    return merge([
        buildCommonJs(),
        buildTests()
    ]);
});
gulp.task('watch', function (done) {
   watch(src, function () {
       console.log('Building...');
       buildCommonJs();
       console.log('Talaria built');
   });
   watch(testsSrc, function () {
       console.log('Building tests...');
       buildTests();
       console.log('Tests built');
   });
});