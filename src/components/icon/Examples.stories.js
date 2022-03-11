import EIcon from "./Icon.vue";

export default {
  title: "Components/Icon/Example",
};

export const Example = () => ({
  components: { EIcon },
  template: `
  <div class="container">
    <e-icon :path="[{d:'M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z',fill:'error'}]" x-large>medi mdi-test</e-icon>  
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
