import { Component, Vue } from "vue-property-decorator";
import ripple from '@/directives/ripple'

@Component({
  directives: {
    ripple
  }
})
export default class Common extends Vue {
  mergeClass(availableClasses: Record<string, unknown>): string {
    const result = Object.keys(availableClasses).filter(
      (key: string) => !!(this as any)[key]
    );
    return result
      .map((key: string) => (availableClasses as any)[key])
      .join(" ");
  }
}
