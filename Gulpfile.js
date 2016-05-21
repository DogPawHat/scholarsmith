var metalsmith = require("metalsmith"),
    templates = require("metalsmith-templates"),
    markdown = require("metalsmith-markdown"),
    typescript = require("typescript"),
    gulp = require("gulp"),
    webpack = require("webpack"),
    gutil = require("gulp-util"),
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

gulp.task("partials", funciton(callback){
    //Register handlebars partials here
    Handlebars.registerPartial('header', fs.readFileSync(__dirname + '/templates/partials/header.hbt').toString());
});

gulp.task("metalsmith", "[partials]", function (callback) {

    Handlebars.registerPartial('header', fs.readFileSync(__dirname + '/templates/partials/header.hbt').toString());

    metalsmith(__dirname)
        .use(markdown())
        .use(templates('handlebars'))
        .source('./tutorial')
        .destination('./build')
        .build();
    callback();
});
