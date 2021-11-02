import { mount, createLocalVue, Wrapper } from "@vue/test-utils";
import VButton from "@/components/Button/Button.vue";
const localVue = createLocalVue();

describe("VButton.vue", () => {
  let wrapper!: Wrapper<Vue>;

  beforeEach(() => {
    wrapper = mount(VButton, { localVue });
  });

  it("dont fire cleck event when disabled", () => {
    wrapper.setProps({ disabled: true });
    wrapper.find(".v-btn").trigger("click");
    const actual = wrapper.emitted()["click"];
    expect(actual).toBeUndefined();
  });
});
