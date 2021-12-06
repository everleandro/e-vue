import { withKnobs, boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import EForm from "./form.vue";
import ETextField from "../text-field/text-field.vue";
import ECheckbox from "../checkbox/checkbox.vue";
import EButton from "../Button/Button.vue";

export default {
  component: EForm,
  title: "Components/e-form",
  decorators: [withKnobs],
};

export const Index = () => ({
  components: { EForm, ETextField, ECheckbox, EButton },
  template: `
  <div> 
  <pre>formulario <b>{{valid?'Valido':'Invalido'}}</b></pre> 
    <e-form v-model="valid">
      <e-text-field color="success" label="nombre*" outlined :rules="[required]"></e-text-field> 
      <e-text-field color="success" outlined></e-text-field> 
      <e-checkbox color="success" :rules="[required]" label="acepto las politicas" ></e-checkbox>
      <e-button :disabled="!valid" color="primary" @click="click">Enviar</e-button>
    </e-form>  
  </div>
  `,
  props: {},
  data: () => ({ valid: null }),
  methods: {
    click: action("click"),
    required(val) {
      return !!val || val === 0 || "Este campo es requerido";
    },
  },
});
