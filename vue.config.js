module.exports = {
  chainWebpack: config => {
    config.module
      .rule("pug")
      .test(/\.pug$/)
      .use("pug-plain-loader")
      .loader("pug-plain-loader")
      .end();
  },

  css: {
    loaderOptions: {
        // passando opções pro sass-loader
        sass: {
            // @/ é um alias para src/
            data: `@import "@/assets/scss/bootstrap/_functions.scss";
                   @import "@/assets/scss/bootstrap/_variables.scss";
                   @import "~animate-scss/animate.scss";`,
            // includePaths: path.resolve(__dirname, 'src/assets/scss')
        }
    }
},

  lintOnSave: false
};
