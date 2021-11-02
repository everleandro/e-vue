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
  template: `<v-button :disabled="disabled" @click="click">Hola mundos</v-button>`,
  props: {
    disabled: {
      default: boolean("Disabled", true),
    },
  },
  methods: {
    click: action("click"),
  },
});
