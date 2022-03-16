import EIcon from "./Icon.vue";
import EButton from "../Button/Button.vue";

export default {
  title: "Components/Icon/Example",
};

export const Example = () => ({
  components: { EIcon, EButton },
  template: `
  <div class="container">
    <e-button fab large color="primary">  
      <e-icon :path="['M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z']" x-large>medi mdi-test</e-icon>  
    </e-button>
    <e-button icon depressed x-large color="primary">  
      <e-icon :path="['M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z']" x-large>medi mdi-test</e-icon>  
    </e-button>
    <e-button icon depressed small color="primary">  
      <e-icon :path="['M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z']" x-large>medi mdi-test</e-icon>  
    </e-button>
    <e-button fab small>  
      <e-icon :path="[{d:'M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z',fill:'error'}]" x-large></e-icon>  
      </e-button>
      <e-icon>medi mdi-test</e-icon>  
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
