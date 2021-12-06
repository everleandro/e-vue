import { mount, createLocalVue, Wrapper } from "@vue/test-utils";
import Checkbox from "@/components/Checkbox/Checkbox.vue";
const localVue = createLocalVue();

describe("ESlider.vue", () => {
  let wrapper!: Wrapper<Vue>;

  beforeEach(() => {
    wrapper = mount(Checkbox, { localVue });
  });
});
