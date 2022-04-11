import EButton from "./Button.vue";
import ERow from "@/components/Grid/row.vue";
import ECol from "@/components/Grid/col.vue";

export default {
  title: "Components/Button/Example",
};

export const Example = () => ({
  components: { EButton, ERow, ECol },
  template: `
      <div class="container">
      <e-row>
        <e-col col="24">
          <div class="outlined pa-3">
            <p class="mt-4 mb-3">Block</p>
            <hr class="e-divider mb-3"/>
            <e-button block>Block</e-button>
          </div>
        </e-col>
        <e-col col="24" class="mt-24">
          <div class="outlined pa-3">
            <p class="mt-4 mb-3">Depressed</p>
            <hr class="e-divider mb-3"/>
            <e-button depressed block>Depressed block button</e-button>
          </div>
        </e-col>
        <e-col col="24" class="mt-24">
          <div class="outlined pa-3">
            <p class="mt-4 mb-3">Fab</p>
            <hr class="e-divider mb-3"/>
            <div class="justify-center d-flex align-center">
              <e-button class="mx-12" fab x-small color="success">S</e-button>
              <e-button class="mx-12" fab small color="error">E</e-button>
              <e-button class="mx-12" fab large color="primary">P</e-button>
              <e-button class="mx-12" fab x-large color="secondary">S</e-button>
            </div>
          </div>
        </e-col>
        <e-col col="24" class="mt-24">
          <div class="outlined pa-3">
            <p class="mt-4 mb-3">Icon-Depressed</p>
            <hr class="e-divider mb-3"/>
            <div class="justify-center d-flex align-center">
              <e-button class="mx-12" icon depressed x-small color="success">S</e-button>
              <e-button class="mx-12" icon depressed small color="error">E</e-button>
              <e-button class="mx-12" icon depressed large color="primary">P</e-button>
              <e-button class="mx-12" icon depressed x-large color="secondary">S</e-button>
            </div>
          </div>
        </e-col>
        <e-col col="24" class="mt-24">
          <div class="outlined pa-3">
            <p class="mt-4 mb-3">No-ripple</p>
            <hr class="e-divider mb-3"/>
            <div class="justify-center d-flex align-center">
              <e-button class="mx-12" :ripple="false" block>Button</e-button>
            </div>
          </div>
        </e-col>
        <e-col col="24" class="mt-24">
          <div class="outlined pa-3">
            <p class="mt-4 mb-3">Outlined</p>
            <hr class="e-divider mb-3"/>
            <div class="justify-center d-flex align-center">
              <e-button class="mx-12" outlined color="success">Button</e-button>
              <e-button class="mx-12" outlined color="error">Button</e-button>
              <e-button class="mx-12" outlined color="primary">Button</e-button>
              <e-button class="mx-12" outlined color="secondary">Button</e-button>
            </div>
            <div class="justify-center d-flex align-center mt-3">
              <e-button class="mx-12" outlined fab x-small color="primary">F</e-button>
              <e-button class="mx-12" outlined fab small color="secondary">F</e-button>
              <e-button class="mx-12" outlined fab large color="success">F</e-button>
              <e-button class="mx-12" outlined fab x-large color="error">F</e-button>
            </div>
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
