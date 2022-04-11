import EButton from "./Button.vue";
import ERow from "@/components/Grid/row.vue";
import ECol from "@/components/Grid/col.vue";
import ECheckbox from "@/components/checkbox/checkbox.vue";
import ERadioGroup from "@/components/radio/radio-group.vue";
import ERadio from "@/components/radio/radio.vue";
import EIcon from "@/components/icon/Icon.vue";
import ESelect from "@/components/select/component.vue";

export default {
  component: EButton,
  title: "Components/Button/Usage",
};

export const Usage = () => ({
  components: {
    EButton,
    ERow,
    ECol,
    ECheckbox,
    ERadioGroup,
    ERadio,
    EIcon,
    ESelect,
  },
  data: () => ({
    disabled: false,
    selectedColor: "primary",
    colors: ["primary", "secondary", "success", "error", "none"],
    selectedSize: "standard",
    selectedType: "standard",
    sizes: ["XSmall", "small", "large", "XLarge"],
    types: ["fab", "icon", "standard"],
    fab: false,
    depressed: false,
    outlined: false,
    block: false,
    rounded: false,
    icon: false,
  }),
  computed: {
    showButtonIcon() {
      return this.selectedType !== "standard";
    },
  },
  template: `
    <template>
      <div class="button-usage">
        <div class="e-card pa-4">
          <e-row>
            <e-col col="24" md="12" lg="12" class="box">
              <e-button
                  :disabled="disabled"
                  :color="selectedColor"
                  :depressed="depressed"
                  :outlined="outlined"
                  :block="block"
                  :rounded="rounded"
                  v-bind="{ [selectedSize]: true ,[selectedType]: true}"
              >
                <e-icon v-if="showButtonIcon">mdi mdi-account</e-icon>
                <template v-else> Button </template>
              </e-button>
            </e-col>
            <e-col col="24" md="12" lg="12">
              <e-row no-gutters>
                <e-col col="24">
                  <e-select
                      v-model="selectedColor"
                      label="colors"
                      class="mb-2"
                      dense
                      :items="colors"
                      outlined
                  />
                </e-col>
                <e-col col="12">
                  <p class="e-label pa-2">Size</p>
                  <e-radio-group v-model="selectedSize" dense>
                    <e-radio
                        v-for="size in sizes"
                        :key="size"
                        :input-value="size"
                        :label="size"
                    />
                  </e-radio-group>
                  <p class="e-label pa-2">Type</p>
                  <e-radio-group v-model="selectedType" dense>
                    <e-radio
                        v-for="size in types"
                        :key="size"
                        :input-value="size"
                        :label="size"
                    />
                  </e-radio-group>
                </e-col>
                <e-col col="12">
                  <e-checkbox v-model="disabled" dense label="disabled"></e-checkbox>            
                  <e-checkbox v-model="depressed" dense label="depressed"></e-checkbox>
                  <e-checkbox v-model="outlined" dense label="outlined"></e-checkbox>
                  <e-checkbox v-model="block" dense label="block"></e-checkbox>
                  <e-checkbox v-model="rounded" dense label="rounded"></e-checkbox>              
                </e-col>                
              </e-row>              
            </e-col>
          </e-row>
        </div>
      </div>
    </template>
  `,
});

Usage.parameters = {
  options: { showPanel: false },
  previewTabs: {
    canvas: {
      hidden: true,
    },
  },
  viewMode: "docs",
};
