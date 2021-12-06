import { withKnobs, boolean } from "@storybook/addon-knobs";
import ERadio from "./radio.vue";
import ERadioGroup from "./radio-group.vue";

export default {
  component: ERadio,
  title: "Components/e-radio-group",
  decorators: [withKnobs],
};

export const RadioGroup = () => ({
  components: { ERadio, ERadioGroup },
  template: `
  <div> 
    <e-radio-group 
      :disabled="disabled" 
      :readonly="readonly" 
      :row="row" 
      default-value="secodnary"
    >
      <e-radio label="default" input-value="default" >default</e-radio>
      <e-radio color="secodnary" label="secodnary" input-value="secodnary"></e-radio>
      <e-radio color="success" label="default" input-value="success"></e-radio>
      <e-radio color="red" label="default" input-value="red"></e-radio>
    </e-radio-group>
  </div>
  `,
  props: {
    disabled: {
      default: boolean("disabled", false),
    },
    row: {
      default: boolean("row", false),
    },
    readonly: {
      default: boolean("readonly", false),
    },
  },
});
