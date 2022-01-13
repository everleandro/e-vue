import { withKnobs, number } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import ERow from "./row.vue";
import ECol from "./col.vue";

export default {
  component: ERow,
  title: "Components/Grid",
  decorators: [withKnobs],
};

export const Grid = () => ({
  components: { ERow, ECol },
  template: `
  <div class="container">
    <h1 class="mb-4">Grid system</h1>
    <p class="mb-4">EverVue comes with a 24 point grid system built using flexbox. These resolutions are defined below in the Viewport Breakpoints table and can be modified by Sass varialbe</p>
    <h3 class="mb-2">Breakpoints</h3>
    <e-row no-gutters class="mb-8">
      <e-col class="outlined pa-3" col="4">Code</e-col>
      <e-col class="outlined pa-3" col="20">Range</e-col>
      <e-col class="outlined pa-3" col="4">xs</e-col>
      <e-col class="outlined pa-3" col="20">< 600px</e-col>
      <e-col class="outlined pa-3" col="4">sm</e-col>
      <e-col class="outlined pa-3" col="20">600px > < 960px</e-col>
      <e-col class="outlined pa-3" col="4">md</e-col>
      <e-col class="outlined pa-3" col="20">960px > < 1264px*</e-col>
      <e-col class="outlined pa-3" col="4">lg</e-col>
      <e-col class="outlined pa-3" col="20">1264px > < 1904px*</e-col>
      <e-col class="outlined pa-3" col="4">xl</e-col>
      <e-col class="outlined pa-3" col="20">1904px*< 600px</e-col>
    </e-row>
    <h1 class="mb-4">Usage</h1>
    <p class="mb-6">The Vuetify grid is heavily inspired by the Vuetify grid</p>
    <e-row>
      <e-col v-for="i in amount" :key="i" class="outlined" :col="numberOfColumn">
        {{i}}
      </e-col>
    </e-row>
<!--    <p class="mb-6 mt-6">Breakpoint basis:</p>-->
  </div>
  `,
  props: {
    amount: {
      default: number("amount", 2, {
        range: true,
        min: 1,
        max: 24,
        step: 1,
      }),
    },
    numberOfColumn: {
      default: number("number of columns", 12, {
        range: true,
        min: 1,
        max: 24,
        step: 1,
      }),
    },
  },
  methods: {
    click: action("click"),
  },
});
Grid.parameters = { options: { showPanel: true } };
