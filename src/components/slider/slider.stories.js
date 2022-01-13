import { withKnobs, boolean, text, select } from "@storybook/addon-knobs";
import ESlider from "./slider.vue";
import ERow from "./../Grid/row.vue";
import ECol from "./../Grid/col.vue";

export default {
  component: ESlider,
  title: "Components/Slider",
  decorators: [withKnobs],
};

export const Slider = () => ({
  components: { ESlider, ERow, ECol },
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
  <div class="mt-6">
    <e-slider 
      v-model="value1" 
      :disabled="disabled" 
      :decimal="decimal" 
      :label="label"
      :track-color="trackColor"
      :thumb-color="thumbColor"
      :color="color"
      :thumb-label="thumbLabel"
      ></e-slider>
  </div>
  </div>
  `,
  props: {
    trackColor: {
      default: select(
        "trackColor",
        ["success", "primary", "secondary", "error"],
        "primary"
      ),
    },
    thumbColor: {
      default: select(
        "thumbColor",
        ["success", "primary", "secondary", "error"],
        "primary"
      ),
    },
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
    disabled: {
      default: boolean("disabled", false),
    },
    thumbLabel: {
      default: boolean("thumb-label", false),
    },
    decimal: {
      default: boolean("decimal", false),
    },
  },
  data: () => ({}),
});
Slider.parameters = { options: { showPanel: true } };
