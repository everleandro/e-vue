<template>
  <header :class="rootClass(barClass)" :style="style">
    <div class="e-bar__content">
      <slot></slot>
    </div>
  </header>
</template>
<script lang="ts">
import Common from "@/mixin/common";
import { Component, Prop, Mixins } from "vue-property-decorator";
import EApp from "@/components/app/app.vue";

@Component({ name: "e-bar" })
export default class EBar extends Mixins(Common) {
  @Prop({ type: Boolean, default: false }) dense!: boolean;
  @Prop({ type: Boolean, default: false }) app!: boolean;
  @Prop({ type: Boolean, default: false }) outlined!: boolean;
  @Prop({ type: Boolean, default: false }) fixed!: boolean;
  @Prop({ type: String, default: "" }) color!: string;

  availableRootClasses = {
    dense: "e-bar--dense",
    fixed: "e-bar--fixed",
    app: "e-app-bar",
    outlined: "outlined",
  };
  style = {};
  mounted() {
    this.refreshLayoutStyle();
  }
  refreshLayoutStyle(): void {
    if (this.$parent.$options.name === "e-app") {
      (this.$parent as EApp).updateChildrenStyle(["e-main"], {
        top: `${this.$el.getBoundingClientRect().height}px`,
      });
    }
  }

  get barClass(): string {
    return this.rootClass(`${this.color} e-bar`);
  }

  layoutStyle(property: Record<string, string>): void {
    this.style = { ...this.style, ...property };
  }
}
</script>
<style lang="scss">
@import "./bar.scss";
</style>
