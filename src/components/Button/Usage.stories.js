import { withKnobs, boolean, select, radios } from "@storybook/addon-knobs";
import EButton from "./Button.vue";
import ERow from "./../Grid/row.vue";
import ECol from "./../Grid/col.vue";

export default {
  component: EButton,
  title: "Components/Button",
  decorators: [withKnobs],
};

export const Usage = () => ({
  components: { EButton, ERow, ECol },
  template: `
<div class="container">
    <e-row>
        <e-col col="24">
            <p>Buttons contain options like different colors, sizes and a ripple effect on click.</p>
        </e-col>
       <e-col>
            <e-button 
                :color="color" 
                :disabled="disabled"
                :rounded="rounded"
                :outlined="outlined"
                :block="block"
                :depressed="depressed"
                v-bind="{[size]: true,[type]:true}"
            >
              {{type==='default'?'Button':'I'}}
            </e-button>
        </e-col>    
    </e-row>
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
    size: {
      default: radios("size", ["XSmall", "small", "large", "XLarge"], "large"),
    },
    type: {
      default: radios("type", ["fab", "icon", "default"], "default"),
    },
    disabled: {
      default: boolean("disabled", false),
    },
    outlined: {
      default: boolean("outlined", false),
    },
    depressed: {
      default: boolean("depressed", false),
    },
    block: {
      default: boolean("block", false),
    },
    rounded: {
      default: boolean("rounded", false),
    },
  },
});
Usage.parameters = { options: { showPanel: true } };
