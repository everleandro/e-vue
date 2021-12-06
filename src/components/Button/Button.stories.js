import { withKnobs, boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import EButton from "./Button.vue";

export default {
  component: EButton,
  title: "Components/e-button",
  decorators: [withKnobs],
};

export const Index = () => ({
  components: { EButton },
  template: `
  <div> 
    <e-button 
      color="primary" 
      :x-small="XSmall" 
      :small="small" 
      :x-large="XLarge" 
      :large="large" 
      :icon="icon" 
      :disabled="disabled" 
      :depressed="depressed" 
      :fab="fab" 
      :outlined="outlined" 
      :rounded="rounded" 
      @click="click"
    >
      <i>P</i>
    </e-button>
    <e-button color="secondary" @click="click">secondary</e-button>
    <e-button disabled @click="click">Disabled</e-button>
    <e-button :ripple="false" @click="click">No-Ripple</e-button>
    <e-button depressed @click="click">Depressed</e-button>
    <e-button rounded @click="click">Rounded</e-button>
    <e-button fab @click="click">F</e-button>
    <e-button outlined @click="click">Outlined</e-button>
  </div>
  `,
  props: {
    disabled: {
      default: boolean("disabled", false),
    },
    fab: {
      default: boolean("fab", false),
    },
    depressed: {
      default: boolean("depressed", false),
    },
    rounded: {
      default: boolean("rounded", false),
    },
    outlined: {
      default: boolean("outlined", false),
    },
    XSmall: {
      default: boolean("x-small", false),
    },
    icon: {
      default: boolean("icon", false),
    },
    small: {
      default: boolean("small", false),
    },
    large: {
      default: boolean("large", false),
    },
    XLarge: {
      default: boolean("x-large", false),
    },
  },
  methods: {
    click: action("click"),
  },
});
