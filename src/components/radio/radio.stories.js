import { withKnobs, boolean, select } from "@storybook/addon-knobs";
import ERadio from "./radio.vue";
import ERadioGroup from "./radio-group.vue";
import ERow from "./../Grid/row.vue";
import ECol from "./../Grid/col.vue";

export default {
  component: ERadioGroup,
  title: "Components/Radio",
  subcomponents: { ERadio, ERow, ECol },
  decorators: [withKnobs],
};

export const Radio = () => ({
  components: { ERadio, ERadioGroup, ERow, ECol },
  template: `
<div class="container">
  {{model}}
    <e-radio-group 
      v-model="model"
      :disabled="disabled" 
      :readonly="readonly"
      :row="row" 
      default-value="one"
    >
      <e-radio :color="color" label="one" input-value="one" >default</e-radio>
      <e-radio :color="color" label="two" input-value="two"></e-radio>
      <e-radio :color="color" label="three" input-value="three"></e-radio>
      <e-radio :color="color" label="four" input-value="four"></e-radio>
    </e-radio-group>
  </div>
  `,
  props: {
    color: {
      default: select(
        "color",
        ["success", "primary", "secondary", "error"],
        "primary"
      ),
    },
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
  data: () => ({ model: "secondary" }),
});
Radio.parameters = { options: { showPanel: true } };
