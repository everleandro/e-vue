import { mount, createLocalVue, Wrapper } from "@vue/test-utils";
import ERow from "@/components/Grid/row.vue";
const localVue = createLocalVue();

describe("ERow.vue", () => {
  let wrapper!: Wrapper<Vue>;

  beforeEach(() => {
    wrapper = mount(ERow, { localVue });
  });

  it("dont fire cleck event when disabled", () => {
    wrapper.setProps({ disabled: true });
    wrapper.find(".v-btn").trigger("click");
    const actual = wrapper.emitted()["click"];
    expect(actual).toBeUndefined();
  });
});
