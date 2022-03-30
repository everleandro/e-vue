import { mount, createLocalVue, Wrapper } from "@vue/test-utils";
import TextField from "@/components/text-field/text-field.vue";
const localVue = createLocalVue();

describe("ETextField.vue", () => {
  let wrapper!: Wrapper<Vue>;

  beforeEach(() => {
    wrapper = mount(TextField, { localVue });
  });
});
