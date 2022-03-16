module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "styles/reset.scss";
          @import "styles/_mixins.scss";
          @import "styles/main.scss";
          @import "styles/transitions.scss";
          @import "styles/animations.scss";
          @import "styles/field.scss";
          @import "styles/helper.scss";
          @import "styles/icon.scss";
          @import "styles/messages.scss";
          @import "styles/typography.scss";
          @import "styles/override.scss";
        `,
      },
    },
  },
};
