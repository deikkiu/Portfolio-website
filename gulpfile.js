const gulp = require("gulp");
const browserSync = require("browser-sync");
const sass = require("gulp-sass")(require("sass"));
const cleanCSS = require("gulp-clean-css");
const autoprefixer = require("gulp-autoprefixer");
const rename = require("gulp-rename");
const imagemin = require("gulp-imagemin");
const htmlmin = require("gulp-htmlmin");
const rigger = require("gulp-rigger");
const concat = require("gulp-concat");
const order = require("gulp-order");

const jsOrderFiles = [
  "promo/**/*.js",
  "scroll/scroll-variables.js",
  "scroll/scroll-styles.js",
  "scroll/scroll-elements-heigth.js",
  "scroll/scroll-calculate-value.js",
  "scroll/scroll.js",
  "skills/progress.js",
  "modal/modal.js",
  "form/form.js",
];

gulp.task("server", function () {
  browserSync({
    server: {
      baseDir: "dist",
    },
  });

  gulp.watch("src/*.html").on("change", browserSync.reload);
  gulp.watch("src/blocks/**/*.html").on("change", browserSync.reload);
});

gulp.task("styles", function () {
  return gulp
    .src("src/sass/**/*.+(scss|sass)")
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(rename({ suffix: ".min", prefix: "" }))
    .pipe(autoprefixer())
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(gulp.dest("dist/css"))
    .pipe(browserSync.stream());
});

gulp.task("watch", function () {
  gulp.watch("src/sass/**/*.+(scss|sass|css)", gulp.parallel("styles"));
  gulp.watch("src/blocks/**/*.+(scss|sass|css)", gulp.parallel("styles"));
  gulp.watch("src/**/*.html").on("change", gulp.parallel("html"));
  gulp.watch("src/js/**/*.js").on("change", gulp.parallel("scripts"));
  gulp.watch("src/fonts/**/*").on("all", gulp.parallel("fonts"));
  gulp.watch("src/icons/**/*").on("all", gulp.parallel("icons"));
  gulp.watch("src/img/**/*").on("all", gulp.parallel("images"));
});

gulp.task("html", function () {
  return gulp
    .src("src/*.html")
    .pipe(rigger())
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("dist/"));
});

gulp.task("projects", function () {
  return gulp.src("src/projects/**/*").pipe(gulp.dest("dist/projects"));
});

gulp.task("scripts", function () {
  return gulp
    .src("src/js/common/**/*.js")
    .pipe(order(jsOrderFiles))
    .pipe(concat("index.js"))
    .pipe(gulp.dest("dist/js"))
    .pipe(browserSync.stream());
});

gulp.task("libs", function () {
  return gulp.src("src/js/libs/**/*.js").pipe(gulp.dest("dist/js"));
});

gulp.task("fonts", function () {
  return gulp
    .src("src/fonts/**/*")
    .pipe(gulp.dest("dist/fonts"))
    .pipe(browserSync.stream());
});

gulp.task("icons", function () {
  return gulp
    .src("src/icons/**/*")
    .pipe(gulp.dest("dist/icons"))
    .pipe(browserSync.stream());
});

gulp.task("images", function () {
  return gulp
    .src("src/img/**/*")
    .pipe(imagemin())
    .pipe(gulp.dest("dist/img"))
    .pipe(browserSync.stream());
});

gulp.task("mailer", function () {
  return gulp.src("src/mailer/**/*").pipe(gulp.dest("dist/mailer"));
});

gulp.task(
  "default",
  gulp.parallel(
    "watch",
    "server",
    "html",
    "styles",
    "scripts",
    "fonts",
    "icons",
    "images",
    "mailer",
    "libs",
    "projects"
  )
);