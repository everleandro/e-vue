import { withKnobs, boolean, select, text } from "@storybook/addon-knobs";
import { addParameters } from "@storybook/vue";
import ECheckbox from "./checkbox.vue";
import ERow from "./../Grid/row.vue";
import ECol from "./../Grid/col.vue";

export default {
  component: ECheckbox,
  title: "Components/Checkbox/Usage",
  subcomponents: { ERow, ECol },
  decorators: [withKnobs],
};

export const Usage = () => ({
  components: { ECheckbox, ERow, ECol },
  template: `
  <div class="container"> 
    <div class="outlined pa-3 mt-10">
      <p class="mt-4 mb-3">A v-checkbox in its simplest form provides a toggle between 2 values.</p>
      <hr class="e-divider"/>
      <e-checkbox 
        v-model="model"
        :color="color" 
        :disabled="disabled" 
        :readonly="readonly"
        :false-value="falseValue"
        :true-value="trueValue"
        :label="label+': '+ model" >    
      </e-checkbox>    
    </div>
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
    label: {
      default: text("label", "label"),
    },
    falseValue: {
      default: text("false Value", "false"),
    },
    trueValue: {
      default: text("true Value", "true"),
    },
    disabled: {
      default: boolean("disabled", false),
    },
    readonly: {
      default: boolean("readonly", false),
    },
  },
  data: () => ({ model: false }),
});
addParameters({
  docs: {
    component: { ECheckbox },
  },
});
Usage.parameters = { options: { showPanel: true } };
