import { withKnobs, boolean, number } from "@storybook/addon-knobs";
import { addParameters } from "@storybook/vue";
import EButton from "../Button/Button.vue";
import EDialog from "./Dialog.vue";
import ERow from "./../Grid/row.vue";
import ECol from "./../Grid/col.vue";

export default {
  component: EDialog,
  title: "Components/Dialog/Usage",
  subcomponents: { ERow, ECol, EButton },
  decorators: [withKnobs],
};

export const Usage = () => ({
  components: { EButton, ERow, ECol, EDialog },
  template: `
  <div class="container">
    <e-row>
      <e-col>
        <e-button 
            color="primary" 
            @click="dialog=true"
        >
          Open Dialog
        </e-button>
      </e-col>    
    </e-row>
    <e-dialog v-model="dialog" max-width="400" :persistant="persistant" :fullscreen="fullscreen" :max-width="maxWidth">
      <e-row no-gutters>
          <e-col col="24">
              <h1 class="px-4"> Title</h1>
          </e-col>                        
          <e-col col="24">
              <p class="pa-4">press Esc key to close</p>
          </e-col>
      </e-row>
    </e-dialog> 
  </div>
  `,
  props: {
    fullscreen: {
      default: boolean("fullscreen", false),
    },
    persistant: {
      default: boolean("persistant", false),
    },
    maxWidth: {
      default: number("maxWidth", 400),
    },
  },
  data: () => ({ dialog: false }),
});
addParameters({
  docs: {
    component: { EButton },
  },
});
Usage.parameters = { options: { showPanel: true } };
