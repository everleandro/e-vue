import { withKnobs, boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import VButton from "./Button.vue";

export default {
  component: VButton,
  title: "Components/VButton",
  decorators: [withKnobs],
};

export const Primary = () => ({
  components: { VButton },
  template: `
  <div> 
    <v-button 
      primary 
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
    </v-button>
    <v-button secondary @click="click">secondary</v-button>
    <v-button disabled @click="click">Disabled</v-button>
    <v-button :ripple="false" @click="click">No-Ripple</v-button>
    <v-button depressed @click="click">Depressed</v-button>
    <v-button rounded @click="click">Rounded</v-button>
    <v-button fab @click="click">F</v-button>
    <v-button outlined @click="click">Outlined</v-button>
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
