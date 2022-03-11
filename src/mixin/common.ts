import { Component, Vue } from "vue-property-decorator";
import ripple from "@/directives/ripple";

@Component({
  directives: {
    ripple,
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
}
