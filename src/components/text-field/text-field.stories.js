import {
  withKnobs,
  boolean,
  text,
  select,
  number,
} from "@storybook/addon-knobs";
import ETextField from "./text-field.vue";

export default {
  component: ETextField,
  title: "Components/Text Field",
  decorators: [withKnobs],
};

export const TextField = () => ({
  components: { ETextField },
  template: `
  <div>
    <e-text-field
    :disabled="disabled"
    :dense="dense"
    :readonly="readonly"
    :limit="limit"
    :detail="detail"
    :color="color"
    :rules="required?[_required]:[]"
    :counter="counter"
    :outlined="outlined"
    :label="label"></e-text-field>
  </div>
  `,
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
    label: {
      default: text("label", "label"),
    },
    required: {
      default: boolean("required", false),
    },
    counter: {
      default: boolean("counter", true),
    },
    disabled: {
      default: boolean("disabled", false),
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
