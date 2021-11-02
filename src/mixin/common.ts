import { Component, Vue } from "vue-property-decorator";
@Component
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
