module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/assets/style/_variables.scss";
          @import "@/assets/style/_mixins.scss";
          @import "@/assets/style/style.scss";
        `,
      },
    },
  },
};
