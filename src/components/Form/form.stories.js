import { withKnobs } from "@storybook/addon-knobs";
import EForm from "./form.vue";
import ETextField from "../text-field/text-field.vue";
import ECheckbox from "../checkbox/checkbox.vue";
import EButton from "../Button/Button.vue";
import ESelect from "../select/component.vue";
import ERow from "./../Grid/row.vue";
import ECol from "./../Grid/col.vue";
import ERadio from "./../radio/radio.vue";
import ERadioGroup from "./../radio/radio-group.vue";

export default {
  component: EForm,
  title: "Components/Form",
  subcomponents: {
    ETextField,
    ECheckbox,
    ESelect,
    EButton,
    ERow,
    ECol,
    ERadioGroup,
    ERadio,
  },
  decorators: [withKnobs],
};

export const Form = () => ({
  components: {
    EForm,
    ETextField,
    ECheckbox,
    ESelect,
    EButton,
    ERow,
    ECol,
    ERadioGroup,
    ERadio,
  },
  template: `
  <div class="container">
  <e-form ref="form1" v-model="form1Model" label-min-width="111px" grid>
    <e-text-field
        v-model="fields.name"
        label="NAME"
        lg="12"
        md="16"
        dense
        outlined
    ></e-text-field>
    <e-radio-group
        v-model="fields.gender"
        row
        lg="6"
        md="8"
        dense
        label="GENDER"
        outlined
        default-value="one"
    >
      <e-radio label="F" input-value="one"/>
      <e-radio label="M" input-value="two"/>
    </e-radio-group>
    <e-text-field
        v-model="fields.birthDate"
        label="BIRTHDATE"
        placeholder="dd/mm/yyyy"
        md="12"
        lg="6"
        dense
        outlined
    />
    <e-text-field
        v-model="fields.surname"
        label="SURNAME"
        md="12"
        lg="12"
        dense
        outlined
    ></e-text-field> 
    <e-text-field
        v-model="fields.dni"
        label="DNI"
        md="12"
        lg="12"
        append-icon="mdi mdi-card-account-details"
        dense
        outlined
    ></e-text-field> 
    <e-text-field
        v-model="fields.secondName"
        label="SECOND NAME"
        md="12"
        lg="12"
        dense
        outlined
    ></e-text-field>
    <e-text-field
        v-model="fields.phone"
        md="12"
        lg="6"
        dense
        placeholder="+00 0000 0000"
        prepend-icon="mdi mdi-phone"
        outlined
    ></e-text-field>
    <e-text-field
        v-model="fields.phone2"
        md="12"
        lg="6"
        dense
        placeholder="+00 0000 0000"
        prepend-icon="mdi mdi-phone"
        outlined
    ></e-text-field>
    <e-text-field
        v-model="fields.address"
        md="12"
        lg="18"
        dense
        label="ADDRESS"
        outlined
    ></e-text-field>
    <e-text-field
        v-model="fields.pc"
        md="12"
        lg="6"
        dense
        label="P.C."
        placeholder="0000"
        outlined
    ></e-text-field>
  </e-form>
</div>
  `,
  props: {},
  data: () => ({
    form1Model: null,
    form2Model: null,
    radio: "M",
    selectModel: null,
    radioModel: null,
    fields: {
      email: "",
      birthDate: "",
      address: "",
      name: "",
      dni: "",
      pc: "",
      phone: "",
      phone2: "",
      surname: "",
      secondName: "",
      gender: "M",
      acceptRules: false,
    },
  }),
  methods: {
    validate() {
      this.$refs.form1.validate();
    },
    reset() {
      this.$refs.form1.reset();
    },
    required(val) {
      return !!val || val === 0 || "field required";
    },
    checkboxRule(val) {
      return !!val || val === 0 || "you must agree to continue!";
    },
    emailRule(val) {
      return /.+@.+/.test(val) || "Must be valid e-mail";
    },
  },
});
Form.parameters = { options: { showPanel: false } };
