const {src, dest} = require("gulp");
const url = require("../config/url.js");
const gulpSize = require("gulp-size");
const autoprefixer = require("gulp-autoprefixer");
const csso = require("gulp-csso");
const rename = require("gulp-rename");
const shorthand = require("gulp-shorthand");
const mediaCss = require("gulp-group-css-media-queries");
const sass = require("gulp-sass")(require("sass"));
const gulpSassGlob = require("gulp-sass-glob");
const gulpWebp = require("gulp-webp-css");

const scss = () =>{
  return src(url.scss.src)
  // .pipe(gulpPug({
  //   pretty: true,
  //   data: {
  //     baza: require("../baza/slider.json")
  //   }
  // }))
  .pipe(gulpSassGlob())
  .pipe(sass())
  .pipe(gulpWebp())
  .pipe(autoprefixer())
  .pipe(shorthand())
  .pipe(mediaCss())
  .pipe(gulpSize({
    title: "main.css"
  }))
  .pipe(dest(url.scss.dest))
  .pipe(csso())
  .pipe(gulpSize({
    title: "main.min.css"
  }))
  .pipe(rename({
    suffix: ".min"
  }))
 
  .pipe(dest(url.scss.dest))
}

module.exports = scss;