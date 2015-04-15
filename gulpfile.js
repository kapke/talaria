var gulp = require('gulp'),
    gulpTs = require('gulp-typescript'),
    merge = require('merge2'),
    sourcemaps = require('gulp-sourcemaps'),
    src = ['lib/*.ts', 'lib/**/*.ts', 'typings/**/*.ts'],
    dest = {
        definitions: 'definitions',
        commonjs: 'dist/commonjs',
        amd: 'dist/amd',
        lib: 'lib',
        single: 'dist/talaria.js'
    };

function buildDefinitions () {
    return gulp
        .src(src)
        .pipe(gulpTs({
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
        .pipe(gulpTs({
            typescript: require('typescript'),
            module: 'commonjs',
            target: 'ES5'
        }))
        .js
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(dest.commonjs))
        .pipe(gulp.dest(dest.lib));
}

function buildAmd () {
    return gulp
        .src(src)
        .pipe(gulpTs({
            typescript: require('typescript'),
            module: 'amd',
            target: 'ES5'
        }))
        .js
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(dest.amd));
}

function buildSingle () {
    //in some way there should be single file created
}

gulp.task('build', function () {
    return merge([
        buildCommonJs(),
        buildDefinitions(),
        buildAmd(),
        //buildSingle()
    ]);
});