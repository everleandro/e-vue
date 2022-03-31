import {
  withKnobs, boolean, text, select
} from "@storybook/addon-knobs";
import ESelect from "./component.vue";

export default {
  component: ESelect,
  title: "Components/Select",
  decorators: [withKnobs],
};

export const Select = () => ({
  components: { ESelect },
  template: `
  <div>
    <e-select
      v-model="model" 
      :label="label" 
      :dense="dense" 
      :color="color" 
      :items="items" 
      :detail="detail" 
      :outlined="outlined" 
      :rules="[_required]"
    />
    <p> model-value: {{model}} </p>
  </div>
  `,
  data: () => ({
    model: null,
    items: [{ label: 'item1', value: 1 }, { label: 'item2', value: 2 }, { label: 'item3', value: 3 }, { label: 'item4', value: 4 }]
  }),
  props: {
    color: {
      default: select(
        "color",
        ["success", "primary", "secondary", "error"],
        "primary"
      ),
    },
    detail: {
      default: text("detail", "hint!!"),
    },
    label: {
      default: text("label", "label"),
    },
    required: {
      default: boolean("required", true),
    },
    dense: {
      default: boolean("dense", false),
    },
    outlined: {
      default: boolean("outlined", true),
    },
  },
  methods: {
    _required(val) {
      return !!val || val === 0 || "field required";
    },
  },
});
Select.parameters = { options: { showPanel: true } };
