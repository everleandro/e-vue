module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/assets/style/reset.scss";
          @import "@/assets/style/_variables.scss";
          @import "@/assets/style/colors.scss";
          @import "@/assets/style/_mixins.scss";
          @import "@/assets/style/animations.scss";
          @import "@/assets/style/style.scss";
          @import "@/assets/style/icon.scss";
          @import "@/assets/style/field.scss";
          @import "@/assets/style/messages.scss";
          @import "@/assets/style/grid.scss";
          @import "@/assets/style/typography.scss";
          @import "@/assets/style/helper.scss";
        `,
      },
    },
  },
};
