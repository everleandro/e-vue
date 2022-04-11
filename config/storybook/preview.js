import "../../styles/story/main.scss";

export const decorators = [
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  (story) => ({
    components: { story },
    template: '<div class="e-container"><story /></div>',
  }),
];
