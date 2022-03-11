import EBar from "./bar.vue";
import ERow from "./../Grid/row.vue";
import ECol from "./../Grid/col.vue";

export default {
  title: "Components/Bar/Example",
};

export const Example = () => ({
  components: { EBar, ERow, ECol },
  template: `
<div class="container">
  <e-row>
    <e-col col="24">
        <div class="outlined pa-3">
            <p class="mt-4 mb-3">Block</p>
             <hr class="e-divider mb-3"></hr>
            <e-bar color="success" outlined>asd</e-bar>
        </div>
    </e-col>
</e-row>
 </div> `,
  props: {},
});
Example.parameters = {
  options: { showPanel: false },
  previewTabs: {
    "storybook/docs/panel": {
      hidden: true,
    },
  },
  viewMode: "canvas",
};
