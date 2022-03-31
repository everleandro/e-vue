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
  <p>
    The internal e-form component makes it easy to add validation to form
    inputs. All input components have a rules prop which accepts a mixed array
    of types function. These allow you to specify conditions in which the
    input is valid or invalid. Whenever the value of an input is changed, each
    function in the array will receive the new value and each array element
    will be evaluated. If a function or array element returns false or a
    string, validation has failed and the string value will be presented as an
    error message.
  </p>
  <div class="outlined pa-3 mt-10">
    <h3>Lazy: true</h3>
    <e-form ref="form1" v-model="form1Model">
      <e-text-field
        v-model="fields.name"
        label="Name"
        outlined
      ></e-text-field>
      <e-text-field
        v-model="fields.email"
        label="E-mail *"
        outlined
        :rules="[required, emailRule]"
      ></e-text-field>
      <e-select v-model="selectModel" :rules="[required]" :items="['value1','value2']">
      <e-checkbox
        v-model="fields.acceptRules"
        :rules="[checkboxRule]"
        label="I accept the policies"
      ></e-checkbox>
    </e-form>
    <e-radio-group v-model="radio" row>
      <e-radio label="Masculino" input-value="M"></e-radio>
      <e-radio label="Femenino" input-value="F"></e-radio>
    </e-radio-group>
    <hr class="e-divider mb-3" />
    <e-button color="primary" :disabled="!form1Model" @click="validate()"
      >Validate</e-button
    >
    <e-button color="primary" @click="reset()">Reset validation</e-button>
  </div>

  <div class="outlined pa-3 mt-24">
    <h3 class="mt-10">Lazy: <code>false</code></h3>
    <e-form ref="form2" v-model="form2Model" :lazy="false">
      <e-text-field label="Name" outlined></e-text-field>
      <e-text-field
        label="Last Name *"
        :rules="[required]"
        outlined
      ></e-text-field>
    </e-form>
    <e-button color="primary" :disabled="!form2Model">Submit</e-button>
  </div>
</div>
  `,
  props: {},
  data: () => ({
    form1Model: null,
    form2Model: null,
    radio: "M",
    selectModel: null,
    fields: {
      email: "",
      name: "",
      lastName: "",
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
