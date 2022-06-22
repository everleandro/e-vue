import ECard from "./component.vue";
export default {
  component: ECard,
  title: "Components/ECard",
};

export const Usage = () => ({
  components: {
    ECard,
  },
  data: () => ({}),
  template: `

  <div class="white">
  <e-card>asd</e-card>
  </div>

  `,
});
