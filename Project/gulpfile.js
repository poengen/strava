var paths = {
  jsDest: "./e2e/"
};

/**************
  DEVELOPMENT
**************/

var gulp = require("gulp"),
  runsequence = require("run-sequence"),
  typescript = require("gulp-typescript");
//protractor = require("gulp-protractor").protractor;

gulp.task("transpileTS", function() {
  var tsProject = typescript.createProject("./e2e/tsconfig.e2e.json");
  var tsResult = gulp
    .src(["./e2e/**/*.ts", "!./e2e/specs/testignore/*.ts"])
    .pipe(tsProject());
  return tsResult.js.pipe(gulp.dest(paths.jsDest));
});

gulp.task("transpileTS:watch", () => {
  gulp.watch(
    ["./e2e/**/*.ts", "!./e2e/specs/testignore/*.ts"],
    ["transpileTS"]
  );
});

gulp.task("default", ["transpileTS", "transpileTS:watch"]);

/**************
  PRODUCTION
**************/
