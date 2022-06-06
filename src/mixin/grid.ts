import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class GridMixin extends Vue {
  @Prop({ type: Boolean, default: false }) noGutters!: boolean;
  @Prop({ type: [String, Number], default: null }) col!: number | string;
  @Prop({ type: [String, Number], default: null }) xs!: number | string;
  @Prop({ type: [String, Number], default: null }) sm!: number | string;
  @Prop({ type: [String, Number], default: null }) md!: number | string;
  @Prop({ type: [String, Number], default: null }) lg!: number | string;
  @Prop({ type: [String, Number], default: null }) xl!: number | string;

  get gridClass(): Record<string, string | null> {
    const col = this.col ? `e-col-${this.col}` : null;
    const xs = this.xs ? `e-col-xs-${this.xs}` : null;
    const sm = this.sm ? `e-col-sm-${this.sm}` : null;
    const md = this.md ? `e-col-md-${this.md}` : null;
    const lg = this.lg ? `e-col-lg-${this.lg}` : null;
    const xl = this.xl ? `e-col-xl-${this.xl}` : null;
    return { col, xs, sm, lg, md, xl };
  }
}
