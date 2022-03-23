import { withKnobs } from "@storybook/addon-knobs";
import ERow from "./row.vue";
import ECol from "./col.vue";

export default {
  title: "Components/Grid",
  decorators: [withKnobs],
  subcomponents: { ECol, ERow },
};

export const Grid = () => ({
  components: {
    ERow,
    ECol,
  },
  template: `
  <div class="container">
    
  <e-row>
  <e-col col="24" sm="12" class="primary">a</e-col>
  </e-row> 
</div>
  `,
  props: {},
  data: () => ({}),
  methods: {},
});
Grid.parameters = {
  options: { showPanel: false },
  previewTabs: {
    canvas: {
      hidden: true,
    },
  },
  viewMode: "docs",
};
