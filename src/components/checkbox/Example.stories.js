import ECheckbox from "./checkbox.vue";
import ERow from "./../Grid/row.vue";
import ECol from "./../Grid/col.vue";

export default {
  title: "Components/Checkbox/Example",
};

export const Example = () => ({
  components: { ECheckbox, ERow, ECol },
  template: `
  <div class="container">
    <e-row>
      <e-col col="24">
          <h1>Example</h1>
      </e-col>
      <e-col col="24">
        <hr class="e-divider mb-10"></hr>
      </e-col>
      <e-col col="24">
        <div class="outlined pa-3">
            <p class="mt-4 mb-3">Colors</p>
             <hr class="e-divider mb-3"></hr>
            <e-row no-gutters>
              <e-col><e-checkbox color="error" label="error" ></e-checkbox></e-col>
              <e-col><e-checkbox color="success" label="success" ></e-checkbox></e-col>
              <e-col><e-checkbox color="primary" label="primary" ></e-checkbox></e-col>
              <e-col><e-checkbox color="secondary" label="secondary" ></e-checkbox></e-col>
            </e-row>
        </div>
      </e-col>
      <e-col col="24" class="mt-4">
        <div class="outlined pa-3">
            <p class="mt-4 mb-3">With false-value= dark and true-value= light</p>
             <hr class="e-divider mb-3"></hr>
            <e-row no-gutters>
              <e-col><e-checkbox v-model="model" dense color="error" false-value="dark" true-value="light" :label="model" ></e-checkbox></e-col>
            </e-row>
        </div>
      </e-col>
    </e-row>   
  </div>
  `,
  props: {},
  data: () => ({ model: "light" }),
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
