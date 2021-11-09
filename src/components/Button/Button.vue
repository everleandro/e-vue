<template>
  <div
    v-ripple="{ disabled: !ripple }"
    :is="tag"
    :class="cssClass"
    :style="style"
  >
    <span class="v-btn__content">
      <slot name="default"></slot>
    </span>
  </div>
</template>

<script lang="ts">
import Common from "@/mixin/common";
import { Component, Prop, Mixins } from "vue-property-decorator";
@Component
export default class VButton extends Mixins(Common) {
  @Prop({ type: Boolean, default: false }) disabled!: boolean;
  @Prop({ type: Boolean, default: false }) primary!: boolean;
  @Prop({ type: Boolean, default: false }) secondary!: boolean;
  @Prop({ type: Boolean, default: true }) ripple!: boolean;
  @Prop({ type: Boolean, default: false }) fab!: boolean;
  @Prop({ type: Boolean, default: false }) depressed!: boolean;
  @Prop({ type: Boolean, default: false }) outlined!: boolean;
  @Prop({ type: Boolean, default: false }) small!: boolean;
  @Prop({ type: Boolean, default: false }) XSmall!: boolean;
  @Prop({ type: Boolean, default: false }) large!: boolean;
  @Prop({ type: Boolean, default: false }) XLarge!: boolean;
  @Prop({ type: Boolean, default: false }) rounded!: boolean;
  @Prop({ type: Boolean, default: false }) icon!: boolean;

  width = 0;
  height = 0;

  private get availableClasses(): Record<string, unknown> {
    return {
      disabled: "v-btn--disabled",
      icon: "v-btn--icon",
      secondary: "v-btn--secondary",
      primary: "v-btn--primary",
      depressed: "v-btn--depressed",
      ripple: "v-ripple-element",
      fab: "v-btn--fab",
      outlined: "v-btn--outlined",
      rounded: "v-btn--rounded",
      XSmall: "v-btn--size-x-small",
      small: "v-btn--size-small",
      default: "v-btn--size-default",
      large: "v-btn--size-large",
      XLarge: "v-btn--size-x-large",
    };
  }
  get default(): boolean {
    return !this.small && !this.XSmall && !this.large && !this.XLarge;
  }

  get tag(): string {
    return this.$attrs.to ? "router-link" : "button";
  }
  get cssClass(): string {
    return `${this.mergeClass(this.availableClasses)} v-btn`;
  }
  style(): { width?: string; height?: string } {
    const width = this.width ? { width: `${this.width}px` } : {};
    const height = this.height ? { height: `${this.height}px` } : {};
    return { ...width, ...height };
  }
}
</script>
<style lang="scss">
@import "./button.scss";
</style>
