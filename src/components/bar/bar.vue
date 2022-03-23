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
  @Prop({ type: Boolean, default: false }) clipped!: boolean;

  availableRootClasses = {
    dense: "e-bar--dense",
    fixed: "e-bar--fixed",
    clipped: "e-bar--clipped",
    app: "e-app-bar",
    outlined: "outlined",
  };
  appLayoutStyle = {};
  mounted() {
    this.refreshLayoutStyle();
  }
  refreshLayoutStyle(): void {
    const eapp = this.$parent as EApp;
    if (eapp.$options.name === "e-app") {
      const height = `${this.$el.getBoundingClientRect().height}px`;

      eapp.updateChildrenStyle({
        "e-main": {
          "padding-top": height,
        },
        "e-drawer": {
          "padding-top": this.clipped ? height : "0",
        },
      });
    }
  }

  get barClass(): string {
    return this.rootClass(`${this.color} e-bar`);
  }
  get style() {
    const propertyResult: Record<string, string> = { ...this.appLayoutStyle };
    if (this.clipped) {
      delete propertyResult.left;
      delete propertyResult.right;
    }
    return propertyResult;
  }
}
</script>
<style lang="scss">
@import "./bar.scss";
</style>
