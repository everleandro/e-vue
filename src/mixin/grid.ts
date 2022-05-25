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
    const col = this.col ? `col-${this.col}` : null;
    const xs = this.xs ? `col-xs-${this.xs}` : null;
    const sm = this.sm ? `col-sm-${this.sm}` : null;
    const md = this.md ? `col-md-${this.md}` : null;
    const lg = this.lg ? `col-lg-${this.lg}` : null;
    const xl = this.xl ? `col-xl-${this.xl}` : null;
    return { col, xs, sm, lg, md, xl };
  }
}
