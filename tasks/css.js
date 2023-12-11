const {src, dest} = require("gulp");
const url = require("../config/url.js");
const gulpSize = require("gulp-size");
const concat = require("gulp-concat");
const cssImport = require("gulp-cssimport");
const autoprefixer = require("gulp-autoprefixer");
const csso = require("gulp-csso");
const rename = require("gulp-rename");
const shorthand = require("gulp-shorthand");
const mediaCss = require("gulp-group-css-media-queries");
const gulpWebp = require("gulp-webp-css");


const css = () =>{
  return src(url.css.src)
  // .pipe(gulpPug({
  //   pretty: true,
  //   data: {
  //     baza: require("../baza/slider.json")
  //   }
  // }))
  .pipe(concat("style.css"))
  .pipe(gulpWebp())
  .pipe(cssImport())
  .pipe(autoprefixer())
  .pipe(shorthand())
  .pipe(mediaCss())
  .pipe(gulpSize({
    title: "main.css"
  }))
  .pipe(dest(url.css.dest))
  .pipe(csso())
  .pipe(gulpSize({
    title: "main.min.css"
  }))
  .pipe(rename({
    suffix: ".min"
  }))
 
  .pipe(dest(url.css.dest))
}

module.exports = css;