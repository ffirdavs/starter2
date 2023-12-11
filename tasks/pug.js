const {src, dest} = require("gulp");
const url = require("../config/url.js");
const gulpSize = require("gulp-size");
const gulpPug = require("gulp-pug");
const gulpWebp = require("gulp-webp-html");



const pug = () =>{
  return src(url.pug.src)
  .pipe(gulpSize({
    title: "Before size: "
  }))
  .pipe(gulpPug({
    pretty: true,
    data: {
      baza: require("../baza/slider.json")
    }
  }))
  .pipe(gulpSize({
    title: "After size: "
  }))
  .pipe(gulpWebp())
  .pipe(dest(url.pug.dest))
}

module.exports = pug;