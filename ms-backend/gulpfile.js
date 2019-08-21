const gulp = require("gulp");
const ts = require("gulp-TypeScript");
const sourcemaps = require("gulp-sourcemaps");
const filter = require("gulp-filter");
const watch = require("gulp-watch");
const tsProject = ts.createProject("./tsconfig.json");

gulp.task("transpile", () => {
  const tsResult = tsProject
    .src()
    .pipe(sourcemaps.init())
    .pipe(tsProject(ts.reporter.fullReporter()))
    .on("error", () => null);

  return tsResult.js.pipe(sourcemaps.write("./")).pipe(gulp.dest("./dist"));
});

function watchserver() {
  return watch("./src/**/*.{ts,tsx}",
    gulp.series("transpile")
  );
};

exports.default = gulp.series(watchserver)
