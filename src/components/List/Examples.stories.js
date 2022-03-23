import EList from "./List.vue";
import EListGroup from "./List-group.vue";
import EListItem from "./List-item.vue";

export default {
    title: "Components/List/Example",
};

export const Example = () => ({
    components: { EList, EListGroup, EListItem },
    template: `
    <div class="container">
        <e-list>
            <e-list-group v-model='model'>
                <e-list-item :value='1'>
                    <template slot="prepend-icon">
                        <span aria-hidden="true" class="e-icon e-icon--size-default">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            role="img"
                            aria-hidden="true"
                            class="e-icon__svg"
                        >
                            <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"></path>
                        </svg>
                        </span>
                    </template>
                    asd
                </e-list-item>
                <e-list-item>
                </e-list-item>
            </e-list-group>
        </e-list>
    </div> `,
    props: {},
    data: () => ({
        model: 1
    }),
});
Example.parameters = {
    options: { showPanel: false },
    previewTabs: {
        "storybook/docs/panel": {
            hidden: true,
        },
    },
    viewMode: "canvas",
};
