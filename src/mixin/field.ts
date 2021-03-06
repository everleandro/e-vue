import { Component, Vue, Prop } from "vue-property-decorator";
import { PropType } from "vue";
import EExpandTransition from "@/components/transitions/expand/Component.vue";

@Component({
  components: {
    EExpandTransition,
  },
})
export default class Field extends Vue {
  @Prop({ type: Boolean, default: false }) disabled!: boolean;
  @Prop({ type: Boolean, default: false }) dense!: boolean;
  @Prop({ type: Boolean, default: false }) readonly!: boolean;
  @Prop({ type: Boolean, default: false }) counter!: boolean;
  @Prop({ type: Boolean, default: true }) labelInline!: boolean;
  @Prop({ type: String, default: null }) detail!: string;
  @Prop({
    type: Array as PropType<string[]>,
    default: () => [],
  })
  private readonly detailErrors!: string[];
  @Prop({ type: Boolean, default: false }) detailsOnMessageOnly!: boolean;
  @Prop({ type: [String], default: undefined }) labelMinWidth!:
    | string
    | undefined;
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
  inputsFocusState = true;
  inputsOutlined = false;
  inputsDetailsOnMessageOnly = false;
  inputsLabelMinWidth = "unset";

  get model(): any {
    return this.value !== null ? this.value : this.localValue;
  }
  set model(val: any) {
    this.$emit("input", val);
    this.localValue = val;
    this.dirty = true;
  }
  get labelStyle(): Record<string, string> {
    let minWidth = this.labelMinWidth || this.inputsLabelMinWidth;
    if (this.prependIcon && this.labelMinWidth) {
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
    return !!(this.dirty && this.errorMessage) || !!this.detailErrors?.[0];
  }
  get details(): string {
    return this.hasError
      ? this.detailErrors?.[0] || this.errorMessage
      : this.detail;
  }
  get showDetails(): boolean {
    return this.detailsOnMessageOnly || this.inputsDetailsOnMessageOnly
      ? !!this.details
      : !this.dense;
  }
  get focusedEnabled(): boolean {
    return this.inputsFocusState && this.focused;
  }
  get textColorClass(): string {
    return this.hasError
      ? `error--text`
      : this.focusedEnabled || this.hovered
      ? `${this.rootColor}--text`
      : "";
  }
}
