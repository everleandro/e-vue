import { withKnobs } from "@storybook/addon-knobs";
import ERow from "./row.vue";
import ECol from "./col.vue";

export default {
  title: "Components/Grid",
  decorators: [withKnobs],
  subcomponents: { ECol, ERow },
};

export const Grid = () => ({
  components: {
    ERow,
    ECol,
  },
  template: `
  <div class="container">
    <p>
      e-vue comes with a 24 point grid system built using flexbox. The grid is used to create specific layouts within an application’s content. It contains 5 types of media breakpoints that are used for targeting specific screen sizes or orientations, xs, sm, md, lg and xl. These resolutions are defined below in the Viewport Breakpoints table and can be modified by customizing the
    </p>
    <table style="width:100%;" class="outlined">
        <caption class="pa-3">
          Breakpoints
        </caption>
        <thead>
          <tr class="text-left">
            <th class="pa-3">Device</th>
            <th class="pa-3">Code</th>
            <th class="pa-3">Type</th>
            <th class="pa-3">Range</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="pa-3">
              <span
                aria-hidden="true"
                class="v-icon notranslate v-icon--left theme--light"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24" width="24"
                  role="img"
                  aria-hidden="true"
                  class="v-icon__svg"
                >
                  <path
                    d="M17,19H7V5H17M17,1H7C5.89,1 5,1.89 5,3V21A2,2 0 0,0 7,23H17A2,2 0 0,0 19,21V3C19,1.89 18.1,1 17,1Z"
                  ></path></svg></span
              ><span>Extra small</span>
            </td>
            <td  class="pa-3"><strong>xs</strong></td>
            <td  class="pa-3">Small to large phone</td>
            <td  class="pa-3">&lt; 600px</td>
          </tr>
          <tr>
            <td  class="pa-3">
              <span
                aria-hidden="true"
                class="v-icon notranslate v-icon--left theme--light"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24" width="24"
                  role="img"
                  aria-hidden="true"
                  class="v-icon__svg"
                >
                  <path
                    d="M19,18H5V6H19M21,4H3C1.89,4 1,4.89 1,6V18A2,2 0 0,0 3,20H21A2,2 0 0,0 23,18V6C23,4.89 22.1,4 21,4Z"
                  ></path></svg></span
              ><span>Small</span>
            </td>
            <td  class="pa-3"><strong>sm</strong></td>
            <td  class="pa-3">Small to medium tablet</td>
            <td  class="pa-3">600px &gt; &lt; 960px</td>
          </tr>
          <tr>
            <td  class="pa-3">
              <span
                aria-hidden="true"
                class="v-icon notranslate v-icon--left theme--light"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24" width="24"
                  role="img"
                  aria-hidden="true"
                  class="v-icon__svg"
                >
                  <path
                    d="M4,6H20V16H4M20,18A2,2 0 0,0 22,16V6C22,4.89 21.1,4 20,4H4C2.89,4 2,4.89 2,6V16A2,2 0 0,0 4,18H0V20H24V18H20Z"
                  ></path></svg></span
              ><span>Medium</span>
            </td>
            <td  class="pa-3"><strong>md</strong></td>
            <td  class="pa-3">Large tablet to laptop</td>
            <td  class="pa-3">960px &gt; &lt; 1264px*</td>
          </tr>
          <tr>
            <td  class="pa-3">
              <span
                aria-hidden="true"
                class="v-icon notranslate v-icon--left theme--light"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24" width="24"
                  role="img"
                  aria-hidden="true"
                  class="v-icon__svg"
                >
                  <path
                    d="M21,16H3V4H21M21,2H3C1.89,2 1,2.89 1,4V16A2,2 0 0,0 3,18H10V20H8V22H16V20H14V18H21A2,2 0 0,0 23,16V4C23,2.89 22.1,2 21,2Z"
                  ></path></svg></span
              ><span>Large</span>
            </td>
            <td  class="pa-3"><strong>lg</strong></td>
            <td  class="pa-3">Desktop</td>
            <td  class="pa-3">1264px &gt; &lt; 1904px*</td>
          </tr>
          <tr>
            <td  class="pa-3">
              <span
                aria-hidden="true"
                class="v-icon notranslate v-icon--left theme--light"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24" width="24"
                  role="img"
                  aria-hidden="true"
                  class="v-icon__svg"
                >
                  <path
                    d="M21,17H3V5H21M21,3H3A2,2 0 0,0 1,5V17A2,2 0 0,0 3,19H8V21H16V19H21A2,2 0 0,0 23,17V5A2,2 0 0,0 21,3Z"
                  ></path></svg></span
              ><span>Extra large</span>
            </td>
            <td  class="pa-3"><strong>xl</strong></td>
            <td  class="pa-3">4k and ultra-wide</td>
            <td  class="pa-3">&gt; 1904px*</td>
          </tr>
        </tbody>
      </table>
</div>
  `,
  props: {},
  data: () => ({}),
  methods: {},
});
Grid.parameters = {
  options: { showPanel: false },
  previewTabs: {
    canvas: {
      hidden: true,
    },
  },
  viewMode: "docs",
};
