import EButton from "./Button.vue";
import ERow from "@/components/Grid/row.vue";
import ECol from "@/components/Grid/col.vue";
import EIcon from "@/components/icon/Icon.vue";

export default {
    title: "Components/Button/Fab Type",
};

export const FabType = () => ({
    components: {EButton, ERow, ECol, EIcon},
    template: `
      <div class="container">
      <e-row class="box">
        <e-col><p class="e-label">Standard</p></e-col>
        <e-col col="24" class="d-flex justify-space-between align-center pa-5">
          <e-button class="mx-12" fab x-small color="success">
            <e-icon>mdi mdi-alarm</e-icon>
          </e-button>
          <e-button class="mx-12" fab small color="error">
            <e-icon>mdi mdi-alarm</e-icon>
          </e-button>
          <e-button class="mx-12" fab large color="primary">
            <e-icon>mdi mdi-alarm</e-icon>
          </e-button>
          <e-button class="mx-12" fab x-large color="secondary">
            <e-icon>mdi mdi-alarm</e-icon>
          </e-button>
        </e-col>
        <e-col>
          <p class="e-label">Depressed</p>
        </e-col>
        <e-col col="24" class="d-flex justify-space-between align-center pa-5">
          <e-button class="mx-12" fab depressed x-small color="success">
            <e-icon>mdi mdi-alarm</e-icon>
          </e-button>
          <e-button class="mx-12" fab depressed small color="error">
            <e-icon>mdi mdi-alarm</e-icon>
          </e-button>
          <e-button class="mx-12" fab depressed large color="primary">
            <e-icon>mdi mdi-alarm</e-icon>
          </e-button>
          <e-button class="mx-12" fab depressed x-large color="secondary">
            <e-icon>mdi mdi-alarm</e-icon>
          </e-button>
        </e-col>
      </e-row>
      </div> `,
    props: {},
});
FabType.parameters = {
    options: {showPanel: false},
    previewTabs: {
        canvas: {
            hidden: true,
        },
    },
    viewMode: "docs",
};
