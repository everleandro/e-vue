import EDialog from "./Dialog.vue";
import ERow from "./../Grid/row.vue";
import EButton from "./../Button/Button.vue";
import ECol from "./../Grid/col.vue";

export default {
  title: "Components/Dialog/Example",
};

export const Example = () => ({
  components: { EDialog, EButton, ERow, ECol },
  template: `
<div class="container">
    <e-row>
        <e-col col="24">
            <div class="outlined pa-3">
                <p class="mt-4 mb-3">Persistant</p>
                <hr class="e-divider mb-3"></hr>
                <e-dialog v-model="dialog" max-width="400" persistant>
                    <e-row no-gutters>
                        <e-col col="24">
                            <h1 class="px-4"> Title</h1>
                        </e-col>                        
                        <e-col col="24">
                            <p class="pa-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam, deleniti, quia est non repudiandae, quisquam quibusdam suscipit soluta amet asperiores perspiciatis dignissimos maxime necessitatibus eius corporis? Quam tempora exercitationem ipsam?</p>
                        </e-col>
                        <e-col col="12">
                           <e-button block depressed color="secondary" @click="dialog=false">cancel</e-button>
                        </e-col>
                        <e-col col="12">
                           <e-button block depressed color="primary" @click="dialog=false">accept</e-button>                            
                        </e-col>
                    </e-row>
                </e-dialog>    
                <e-button block @click="dialog=true" color="primary">Open Dialog</e-button>
            </div>
        </e-col>    
        <e-col col="24">
            <div class="outlined pa-3">
                <p class="mt-4 mb-3">Fullscreen</p>
                <e-dialog v-model="dialog2" fullscreen>
                    <div lcass="fill-height d-flex align-center justify-center">
                        <p class="pa-4">press Esc key to close</p>
                    </div>
                </e-dialog>
                <e-button block @click="dialog2=true" color="primary">Open Dialog</e-button>
            </div>
        </e-col>    
    </e-row>
</div> `,
  props: {},
  data: () => ({ dialog: false, dialog2: false }),
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
