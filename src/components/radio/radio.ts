import { mount, createLocalVue, Wrapper } from "@vue/test-utils";
import ERadio from "@/components/radio/radio.vue";
const localVue = createLocalVue();

describe("ERadio.vue", () => {
  let wrapper!: Wrapper<Vue>;

  beforeEach(() => {
    wrapper = mount(ERadio, { localVue });
  });
});
