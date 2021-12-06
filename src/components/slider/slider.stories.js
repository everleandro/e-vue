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
    <e-slider :disabled="disabled" :decimal="decimal" :thumb-label="thumbLabel" style="margin-top:60px"></e-slider>
    <e-slider :value="95" label="color success" color="success"></e-slider>
    <e-slider :value="25" label="with thumb-label" thumb-label></e-slider>
    <e-slider :value="15" label="track-color=red" track-color="red"></e-slider>
    <e-slider :value="75" label="thumb-color=secondary" thumb-color="secondary"></e-slider>
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
});
