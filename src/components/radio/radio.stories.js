import { withKnobs, boolean, select } from "@storybook/addon-knobs";
import ERadio from "./radio.vue";
import ERadioGroup from "./radio-group.vue";

export default {
  component: ERadio,
  title: "Components/Radio",
  decorators: [withKnobs],
};

export const Radio = () => ({
  components: { ERadio, ERadioGroup },
  template: `
<div class="container">
  <e-row>
    <e-col col="24">
        <h1>Usage</h1>
    </e-col>
    <e-col col="24">
      <hr class="e-divider mb-10"></hr>
    </e-col>
  </e-row>
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
