import {
  withKnobs,
  boolean,
  text,
  select,
  number,
} from "@storybook/addon-knobs";
import ETextField from "./text-field.vue";
import EForm from "./../Form/form.vue";

export default {
  component: ETextField,
  title: "Components/Text Field",
  decorators: [withKnobs],
};

export const TextField = () => ({
  components: { ETextField, EForm },
  template: `
  <e-form :inputs-outlined="false" :grid="false">
    <e-text-field
      v-model="model"
      :disabled="disabled"
      :dense="dense"
      :readonly="readonly"
      :clearable="clearable"
      :limit="limit"
      :detail="detail"
      :color="color"
      :suffix="suffix"
      :prefix="prefix"
      prepend-icon="mdi mdi-account"
      :rules="required?[_required]:[]"
      :counter="counter"
      :outlined="outlined"
      :label="label"
    />
  </e-form>
  `,
  data: () => ({
    model: "",
  }),
  props: {
    color: {
      default: select(
        "color",
        ["success", "primary", "secondary", "error"],
        "primary"
      ),
    },
    limit: {
      default: number("limit", 10),
    },
    detail: {
      default: text("detail", "hint!!"),
    },
    suffix: {
      default: text("suffix", "suffix"),
    },
    prefix: {
      default: text("prefix", "prefix"),
    },
    label: {
      default: text("label", "label"),
    },
    required: {
      default: boolean("required", true),
    },
    counter: {
      default: boolean("counter", true),
    },
    disabled: {
      default: boolean("disabled", false),
    },
    clearable: {
      default: boolean("clearable", false),
    },
    outlined: {
      default: boolean("outlined", true),
    },
    dense: {
      default: boolean("dense", false),
    },
    readonly: {
      default: boolean("readonly", false),
    },
  },
  methods: {
    _required(val) {
      return !!val || val === 0 || "field required";
    },
  },
});
TextField.parameters = { options: { showPanel: true } };
