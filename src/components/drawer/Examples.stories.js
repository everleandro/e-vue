import EDrawer from "./Component.vue";
import ERow from "./../Grid/row.vue";
import EBar from "./../bar/bar.vue";
import EIcon from "./../icon/Icon.vue";
import EButton from "./../Button/Button.vue";
import ECol from "./../Grid/col.vue";

export default {
  title: "Components/Drawer/Example",
};

export const Example = () => ({
  components: { EDrawer, ERow, ECol, EButton, EBar, EIcon },
  template: `
<div>
  <div class="d-flex">
    <e-drawer v-model="val">
      <div class="pa-3">
        <e-button  lor="primary" class="mb-3" block @click="val=!val">close</e-button>
        <e-button block color="secondary">test</e-button>
      </div>
    </e-drawer>
    <div style="flex-grow:1;">
    <e-bar>
      <e-button icon color="primary" @click="val=!val">  
        <e-icon 
        :path="['M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z']" 
        x-large 
        ></e-icon>  
      </e-button>
    </e-bar>
    <div class="container">
      <p>lorem</p>
    </div>
  </div>
  </div>
</div> `,
  props: {},
  data: () => ({
    val: false
  }),
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
