import { VueConstructor, DirectiveOptions, ComponentOptions } from "vue";
import * as _components from "@/components";
import * as _directives from "@/directives";

import OurVue from "vue";

export function install(Vue: VueConstructor, args: any = {}): void {
  if (OurVue !== Vue) {
    console.error(
      `Multiple instances of Vue detected See https://github.com/vuetifyjs/vuetify/issues/4068 If you're seeing "$attrs is readonly", it's caused by this`
    );
  }
  const directives = _directives as Record<string, DirectiveOptions>;
  for (const key in directives) {
    Vue.directive(key, directives[key]);
  }

  const components =
    args.components || (_components as Record<string, ComponentOptions<Vue>>);

  (function registerComponents(components) {
    if (components) {
      for (const key in components) {
        Vue.component(key, components[key]);
      }

      return true;
    }
    return false;
  })(components);
}
