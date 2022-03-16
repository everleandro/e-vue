import { mount, createLocalVue, Wrapper } from "@vue/test-utils";
import EButton from "@/components/Button/Button.vue";
const localVue = createLocalVue();

describe("EButton.vue", () => {
  let wrapper!: Wrapper<Vue>;

  beforeEach(() => {
    wrapper = mount(EButton, { localVue });
  });

  it("dont fire cleck event when disabled", () => {
    wrapper.setProps({ disabled: true });
    wrapper.find(".v-btn").trigger("click");
    const actual = wrapper.emitted()["click"];
    expect(actual).toBeUndefined();
  });
});
