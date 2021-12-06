import { withKnobs, boolean } from "@storybook/addon-knobs";
import ECheckbox from "./checkbox.vue";

export default {
  component: ECheckbox,
  title: "Components/e-checkbox",
  decorators: [withKnobs],
};

export const Checkbox = () => ({
  components: { ECheckbox },
  template: `
  <div> 
    <e-checkbox :disabled="disabled" :readonly="readonly" label="default" ></e-checkbox>
    <e-checkbox color="success" label="color success" ></e-checkbox>
  </div>
  `,
  props: {
    disabled: {
      default: boolean("disabled", false),
    },
    readonly: {
      default: boolean("readonly", false),
    },
  },
});
