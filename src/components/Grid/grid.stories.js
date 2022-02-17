import { withKnobs } from "@storybook/addon-knobs";
import ERow from "./row.vue";
import ECol from "./col.vue";

export default {
  title: "Components/Grid",
  decorators: [withKnobs],
};

export const Grid = () => ({
  components: {
    ERow,
    ECol,
  },
  template: `
  <div class="container">
    <e-row>
      <e-col col="24">
          <h1>Grid system</h1>
      </e-col>
      <e-col col="24">
        <hr class="e-divider mb-10"></hr>
      </e-col>
    </e-row>
    <p>
      e-vue comes with a 24 point grid system built using flexbox. The grid is used to create specific layouts within an application’s content. It contains 5 types of media breakpoints that are used for targeting specific screen sizes or orientations, xs, sm, md, lg and xl. These resolutions are defined below in the Viewport Breakpoints table and can be modified by customizing the
    </p>
    <e-col col="24" class="mt-5">
      <div class="outlined pa-3">
          <p class="mt-4 mb-3">Colors</p>
          <hr class="e-divider mb-3"></hr>
          <e-row no-gutters>
            <e-col>s</e-col>
          </e-row>
      </div>
  </e-col>
</div>
  `,
  props: {},
  data: () => ({}),
  methods: {},
});
Grid.parameters = { options: { showPanel: false } };
