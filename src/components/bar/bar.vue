<template>
  <header :class="rootClass(barClass)">
    <div class="e-bar__content">
      <slot></slot>
    </div>
  </header>
</template>
<script lang="ts">
import Common from "@/mixin/common";
import { Component, Prop, Mixins } from "vue-property-decorator";

@Component
export default class EBar extends Mixins(Common) {
  @Prop({ type: Boolean, default: false }) dense!: boolean;
  @Prop({ type: Boolean, default: false }) app!: boolean;
  @Prop({ type: Boolean, default: false }) outlined!: boolean;
  @Prop({ type: String, default: "" }) color!: string;

  availableRootClasses = {
    XLarge: "e-bar--dense",
    app: "e-bar--app",
    outlined: "outlined",
  };
  get barClass(): string {
    return this.rootClass(`${this.color} e-bar`);
  }
}
</script>
<style lang="scss">
@import "./bar.scss";
</style>
