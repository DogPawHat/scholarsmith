var metalsmith = require("metalsmith"),
    layouts = require("metalsmith-layouts"),
    markdown = require("metalsmith-markdown"),
    typescript = require("gulp-typescript"),
    gulp = require("gulp"),
    webpack = require("webpack"),
    gutild = require("gulp-util"),
    webpack_config = require("./webpack.config.js"),
    Handlebars = require('handlebars'),
    fs = require('fs');

gulp.task("webpack", function (callback) {
    webpack(webpack_config, function (err, stats) {
        if (err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString());
        callback();
    });
});

gulp.task("build", ["webpack"], function(callback) {
    return gulp.src("build.ts")
    .pipe(typescript())
})
