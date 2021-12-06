import { mount, createLocalVue, Wrapper } from "@vue/test-utils";
import ESlider from "@/components/slider/Slider.vue";
const localVue = createLocalVue();

describe("ESlider.vue", () => {
  let wrapper!: Wrapper<Vue>;

  beforeEach(() => {
    wrapper = mount(ESlider, { localVue });
  });
});
