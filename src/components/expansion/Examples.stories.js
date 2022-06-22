import EExpansion from "./component.vue";
import EButton from "../Button/Button.vue";

export default {
  title: "Components/EExpansion",
};

export const Example = () => ({
  components: { EExpansion, EButton },
  template: `
<div class="container" style="background: wheat;">
<e-expansion header-title="adasdasdsad">
<div class="e-expansion__body-content">1</div>
<div class="e-expansion__body-content">2</div>
<template #actions>
<e-button>asd</e-button>  
<e-button>****-67</e-button>  
</template>  
</e-expansion>
<e-expansion header-title="adasda*******sdsad">
<div class="e-expansion__body-content">1</div>
<div class="e-expansion__body-content">2</div>
</e-expansion>
asd
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
