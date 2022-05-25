import { Component, Mixins } from "vue-property-decorator";
import ripple from "@/directives/ripple";
import clickOutside from "@/directives/click-outside";
import GridMixin from "@/mixin/grid";

@Component({
  directives: {
    ripple,
    clickOutside,
  },
})
export default class Common extends Mixins(GridMixin) {
  availableRootClasses!: Record<string, string>;

  rootClass(
    _default?: string,
    _objCLass: Record<string, string> = this.availableRootClasses
  ): string {
    const objCLass= {..._objCLass,...this.gridClass}
    const result = Object.keys(objCLass).filter(
      (key: string) => !!(this as never)[key]
    );
    return (
      `${_default} ` + result.map((key: string) => objCLass[key]).join(" ")
    );
  }
  colorText(color: string): string {
    return `${color}--text`;
  }
  isObject(arg: never): boolean {
    return typeof arg === "object" && !Array.isArray(arg) && arg !== null;
  }
}
