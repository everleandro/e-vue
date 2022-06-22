import EExpansion from "./component.vue";

export default {
  title: "Components/EExpansion",
};

export const Example = () => ({
  components: { EExpansion },
  template: `
<div class="container" style="background: wheat;">
<e-expansion header-title="adasdasdsad">
  asdasdad
</e-expansion>
 </div> `,
  props: {},
});
Example.parameters = {
  options: { showPanel: false },
  previewTabs: {
    "storybook/docs/panel": {
      hidden: true,
    },
  },
  viewMode: "canvas",
};
