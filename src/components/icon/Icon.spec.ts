import { mount, createLocalVue, Wrapper } from "@vue/test-utils";
import EIcon from "@/components/icon/EIcon.vue";
const localVue = createLocalVue();

describe("ERow.vue", () => {
  let wrapper!: Wrapper<Vue>;

  beforeEach(() => {
    wrapper = mount(EIcon, { localVue });
  });

  it("dont fire cleck event when disabled", () => {
    wrapper.setProps({ disabled: true });
    wrapper.find(".e-icon").trigger("click");
    const actual = wrapper.emitted()["click"];
    expect(actual).toBeUndefined();
  });
});
