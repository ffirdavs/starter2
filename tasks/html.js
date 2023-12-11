const {src, dest} = require("gulp");
const url = require("../config/url.js");
const gulpFileInclude = require("gulp-file-include");
const htmlMin = require("gulp-htmlmin");
const gulpSize = require("gulp-size");
const gulpWebp = require("gulp-webp-html");


const html = () =>{
  return src(url.html.src)
  .pipe(gulpFileInclude())
  .pipe(gulpSize({
    title: "Before size: "
  }))
  .pipe(htmlMin({
    collapseWhitespace: true
  }))
  .pipe(gulpSize({
    title: "After size: "
  }))
  .pipe(gulpWebp())
  .pipe(dest(url.html.dest))
}

module.exports = html;