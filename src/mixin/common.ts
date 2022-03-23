import { Component, Vue } from "vue-property-decorator";
import ripple from "@/directives/ripple";
import clickOutside from "@/directives/click-outside";

@Component({
  directives: {
    ripple,
    clickOutside,
  },
})
export default class Common extends Vue {
  availableRootClasses!: Record<string, string>;

  rootClass(
    _default?: string,
    objCLass: Record<string, string> = this.availableRootClasses
  ): string {
    const result = Object.keys(objCLass).filter(
      (key: string) => !!(this as any)[key]
    );
    return (
      `${_default} ` + result.map((key: string) => objCLass[key]).join(" ")
    );
  }
  colorText(color: string): string {
    return `${color}--text`;
  }
}
