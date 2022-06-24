import ECard from "./component.vue";
import ECheckbox from "@/components/checkbox/checkbox.vue";
export default {
  component: ECard,
  title: "Components/ECard",
};

export const Usage = () => ({
  components: {
    ECard,
    ECheckbox,
  },
  data: () => ({
    toDestroy: false,
  }),
  template: `

  <div class="white">
  <div class="e-row">
    <input type="text">
    <div class="e-col">
      <e-card :to-destroy="toDestroy"><input type="text"></e-card>
    </div>
    <div class="e-col">
      <e-checkbox v-model="toDestroy" dense label="toDestroy"></e-checkbox>
    </div>
  </div>
  </div>

  `,
});
