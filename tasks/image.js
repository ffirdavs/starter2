const {src, dest} = require("gulp");
const url = require("../config/url.js");
const gulpSize = require("gulp-size");
const imageMin = require("gulp-imagemin");
const newer = require("gulp-newer");
const webp = require("gulp-webp");

const image = () =>{
  return src(url.image.src)
  .pipe(gulpSize({
    title: "Before size: "
  }))
  .pipe(gulpSize({
    title: "After size: "
  }))
  .pipe(newer(url.image.dest))
  .pipe(webp())
  .pipe(dest(url.image.dest))
  .pipe(src(url.image.src))
  .pipe(newer(url.image.dest))
  .pipe(imageMin({
    verbose: true
  }))
  .pipe(dest(url.image.dest))
}

module.exports = image;