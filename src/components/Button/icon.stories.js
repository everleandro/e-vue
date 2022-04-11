import EButton from "./Button.vue";
import ERow from "@/components/Grid/row.vue";
import ECol from "@/components/Grid/col.vue";
import EIcon from "@/components/icon/Icon.vue";

export default {
    title: "Components/Button/Icon Type",
};

export const IconType = () => ({
    components: {EButton, ERow, ECol, EIcon},
    template: `
      <div class="container">
      <e-row>
        <e-col col="24">
          <div class="outlined box">
            <e-button class="mx-12" icon depressed x-small color="success">
              <e-icon>mdi mdi-alarm</e-icon>
            </e-button>
            <e-button class="mx-12" icon depressed small color="error">
              <e-icon>mdi mdi-alarm</e-icon>
            </e-button>
            <e-button class="mx-12" icon depressed large color="primary">
              <e-icon>mdi mdi-alarm</e-icon>
            </e-button>
            <e-button class="mx-12" icon depressed x-large color="secondary">
              <e-icon>mdi mdi-alarm</e-icon>
            </e-button>
          </div>
        </e-col>
      </e-row>
      </div> `,
    props: {},
});
IconType.parameters = {
    options: {showPanel: false},
    previewTabs: {
        canvas: {
            hidden: true,
        },
    },
    viewMode: "docs",
};
