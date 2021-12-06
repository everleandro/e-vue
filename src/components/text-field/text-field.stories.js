import { withKnobs, boolean } from "@storybook/addon-knobs";
import ETextField from "./text-field.vue";

export default {
  component: ETextField,
  title: "Components/e-text-field",
  decorators: [withKnobs],
};

export const TextField = () => ({
  components: { ETextField },
  template: `
  <div> 
    <e-text-field :disabled="disabled" :dense="dense" :readonly="readonly" :limit="10" :counter="counter" :outlined="outlined" label="default" ></e-text-field>
    <e-text-field outlined label="color success outlined" ></e-text-field>
    <e-text-field outlined label="prependIcon" prepend-icon="e-icon e-icon--test"></e-text-field>
    <e-text-field outlined label="appendIcon" append-icon="e-icon e-icon--test"></e-text-field>
  </div>
  `,
  props: {
    disabled: {
      default: boolean("disabled", false),
    },
    outlined: {
      default: boolean("outlined", true),
    },
    counter: {
      default: boolean("counter", false),
    },
    dense: {
      default: boolean("dense", false),
    },
    readonly: {
      default: boolean("readonly", false),
    },
  },
});
