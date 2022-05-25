import { Component, Vue, Prop } from "vue-property-decorator";
import { PropType } from "vue";
// import clickOutside from "@/directives/click-outside";

@Component({
  // directives: {
  //   clickOutside,
  // },
})
export default class Field extends Vue {
  @Prop({ type: Boolean, default: false }) disabled!: boolean;
  @Prop({ type: Boolean, default: false }) dense!: boolean;
  @Prop({ type: Boolean, default: false }) readonly!: boolean;
  @Prop({ type: Boolean, default: false }) counter!: boolean;
  @Prop({ type: String, default: null }) detail!: string;
  @Prop({ type: String, default: undefined }) prependIcon!: string;
  @Prop({
    type: Array as PropType<((param: any) => string | boolean)[]>,
    default: () => [],
  })
  rules!: ((param: string | boolean) => string | boolean)[];
  @Prop({ type: String, default: "primary" }) color!: string;
  @Prop({ type: [Number, String], default: undefined }) limit!: number | string;
  @Prop({ type: String, default: "" }) label!: string;
  @Prop({ default: null }) value!: any;

  id = `${Math.floor(Math.random() * 999999)}-input`;
  localValue!: string | boolean | number | null;
  localDisabled!: boolean;
  dirty = false;
  localReadonly!: boolean;
  focused = false;
  hovered = false;
  //this section is reserved for parentForm
  inputsHoverState = true;
  LabelMinWidth: string | null = null;

  get model(): any {
    return this.value !== null ? this.value : this.localValue;
  }
  set model(val: any) {
    this.$emit("input", val);
    this.localValue = val;
    this.dirty = true;
  }
  update(): void {
    console.log(this.$el);
  }
  get labelStyle(): Record<string, string> {
    let minWidth = this.LabelMinWidth || "unset";
    if (this.prependIcon && this.LabelMinWidth) {
      minWidth = `calc(${minWidth} - 28px)`;
    }
    return { minWidth };
  }
  handleHover(hovered: boolean): void {
    this.inputsHoverState && (this.hovered = hovered);
  }
  get rootColor(): string {
    return this.disabled || this.localDisabled
      ? "disabled"
      : this.dirty && this.errorMessage
      ? "error"
      : this.color;
  }
  get errorMessage(): string {
    const _function = this.rules.find((rule) => rule(this.model) !== true);
    return (_function && (_function(this.model) as string)) || "";
  }

  get hasError(): boolean {
    return !!(this.dirty && this.errorMessage);
  }
  get details(): string {
    return this.hasError ? this.errorMessage : "" || this.detail;
  }
  get textColorClass(): string {
    return this.hasError
      ? `error--text`
      : this.focused || this.hovered
      ? `${this.rootColor}--text`
      : "";
  }
}
