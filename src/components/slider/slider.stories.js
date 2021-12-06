import { withKnobs, boolean } from "@storybook/addon-knobs";
import ESlider from "./slider.vue";

export default {
  component: ESlider,
  title: "Components/e-slider",
  decorators: [withKnobs],
};

export const Slider = () => ({
  components: { ESlider },
  template: `
  <div> 
    <e-slider v-model="value1" :disabled="disabled" :decimal="decimal" :thumb-label="thumbLabel" style="margin-top:60px"></e-slider>
    <e-slider v-model="value2" label="color success" color="success"></e-slider>
    <e-slider v-model="value3" label="disabled"></e-slider>
    <e-slider v-model="value4" label="with thumb-label" thumb-label></e-slider>
    <e-slider v-model="value5" label="track-color=red" track-color="red"></e-slider>
    <e-slider v-model="value6" label="thumb-color=secondary" thumb-color="secondary"></e-slider>
  </div>
  `,
  props: {
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
  data: () => ({
    value1: 10,
    value2: 9,
    value3: 50,
    value4: 30,
    value5: 20,
    value6: 90,
  }),
});
