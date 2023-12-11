const {watch, series, parallel} = require("gulp");
const browserSync = require("browser-sync").create();


// include url
const url = require("./config/url.js");

// include tasks
const clear = require("./tasks/clear.js");
const pug = require("./tasks/pug.js");
const scss = require("./tasks/scss.js");
const image = require("./tasks/image.js");
const font = require("./tasks/font.js");

const watching = () =>{
  watch(url.pug.watch, pug).on("change", browserSync.reload);
  watch(url.scss.watch, scss).on("change", browserSync.reload);
  watch(url.image.watch, image).on("change", browserSync.reload);
  watch(url.font.watch, font).on("change", browserSync.reload);
}

const server = () =>{
  browserSync.init({
    server: {
      baseDir: url.pro
    }
  })
}

exports.pug = pug;
exports.watch = watching;
exports.clear = clear;
exports.server = server;
exports.scss = scss;
exports.image = image;
exports.font = font;

exports.start = series;       