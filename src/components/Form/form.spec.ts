import { mount, createLocalVue, Wrapper } from "@vue/test-utils";
import EForm from "@/components/Form/form.vue";
const localVue = createLocalVue();

describe("EForm.vue", () => {
  let wrapper!: Wrapper<Vue>;

  beforeEach(() => {
    wrapper = mount(EForm, { localVue });
  });

  it("dont fire cleck event when disabled", () => {});
});
