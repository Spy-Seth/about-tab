var dest = "./build";
var src = './src';

module.exports = {
  browserSync: {
    browser: "Google Chrome",
    server: {
      // We're serving the src folder as well
      // for sass sourcemap linking
      baseDir: [dest, src]
    },
    files: [
      dest + "/**",
      // Exclude Map files
      "!" + dest + "/**.map"
    ]
  },
  less: {
    src: src + "/less/app.less",
    srcWatch: src + "/less/**/*",
    dest: dest
  },
  images: {
    src: src + "/images/**",
    dest: dest + "/images"
  },
  markup: {
    src: src + "/htdocs/**",
    dest: dest
  },
  browserify: {
    // Enable source maps
    debug: true,
    // Additional file extentions to make optional
    extensions: ['.hbs'],
    // A separate bundle will be generated for each
    // bundle config in the list below
    bundleConfigs: [{
      entries: './src/javascript/start.js',
      dest: dest,
      outputName: 'app.js'
    }
    //, {
    //  entries: './src/javascript/head.js',
    //  dest: dest,
    //  outputName: 'head.js'
    //}
    ]
  }
};
