import EDrawer from "./../drawer/Component.vue";
import EApp from "./app.vue";
import EContainer from "./container.vue";
import EMain from "./main.vue";
import ERow from "./../Grid/row.vue";
import EBar from "./../bar/bar.vue";
import EIcon from "./../icon/Icon.vue";
import EButton from "./../Button/Button.vue";
import ECol from "./../Grid/col.vue";

export default {
  title: "Components/App/Example",
};

export const Example = () => ({
  components: { EDrawer, ERow, ECol, EButton, EBar, EIcon, EApp, EMain, EContainer },
  template: `
<div>
  <e-app>
    <e-drawer v-model="val" nav>
      <div class="pa-3">
        <e-button  clor="secondary" class="mb-3" block @click="val=!val">close</e-button>
        <e-button block>test</e-button>
      </div>
    </e-drawer>
    <e-drawer v-model="val2" right absolute>
      <div class="pa-3">
        <e-button clor="primary" class="mb-3" block @click="val2=!val2">close</e-button>
      </div>
    </e-drawer>
 
    <e-bar app>
      <e-button icon color="primary" @click="val=!val">  
        <e-icon 
        :path="['M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z']" 
        x-large 
        ></e-icon>  
      </e-button>
      <e-button icon color="secondary" @click="val2=!val2">  
        <e-icon 
        :path="['M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z']"
        ></e-icon>  
      </e-button>
    </e-bar>
    <e-main>    
      <e-container>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur repellat
          ad eum incidunt neque. Consequatur rem doloremque facere explicabo quas
          natus hic exercitationem eveniet expedita? Ut omnis hic harum numquam?
        </p>
      </e-container>  
    </e-main>
  </e-app>
</div> `,
  props: {},
  data: () => ({
    val: false,
    val2: false,
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
