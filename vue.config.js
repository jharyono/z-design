module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
        @import "@/styles/global.scss";
        @import "@/styles/_variables.scss";
        `
      }
    }
  }
}
