import {
  withKnobs
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
    <e-select v-model="model" :items="items" outlined :rules="[_required]"></e-select>
  </div>
  `,
  data: () => ({
    model: null,
    items: ['item1', 'item2', 'item3']
  }),
  props: {

  },
  methods: {
    _required(val) {
      return !!val || val === 0 || "field required";
    },
  },
});
Select.parameters = { options: { showPanel: true } };
