<template>
  <div
    v-ripple="{ disabled: !ripple }"
    :is="tag"
    :class="rootClass(btnClass)"
    v-bind="!!$attrs.to ? { to: $attrs.to } : {}"
    :style="style"
    v-on="$listeners"
  >
    <span class="e-btn__content">
      <slot name="default"></slot>
    </span>
  </div>
</template>

<script lang="ts">
import Common from "@/mixin/common";
import { Component, Prop, Mixins } from "vue-property-decorator";

@Component
export default class EButton extends Mixins(Common) {
  @Prop({ type: Boolean, default: false }) disabled!: boolean;
  @Prop({ type: String, default: "" }) color!: string;
  @Prop({ type: Boolean, default: true }) ripple!: boolean;
  @Prop({ type: Boolean, default: false }) fab!: boolean;
  @Prop({ type: Boolean, default: true }) depressed!: boolean;
  @Prop({ type: Boolean, default: false }) text!: boolean;
  @Prop({ type: Boolean, default: false }) outlined!: boolean;
  @Prop({ type: Boolean, default: false }) block!: boolean;
  @Prop({ type: Boolean, default: false }) small!: boolean;
  @Prop({ type: Boolean, default: false }) XSmall!: boolean;
  @Prop({ type: Boolean, default: false }) large!: boolean;
  @Prop({ type: Boolean, default: false }) XLarge!: boolean;
  @Prop({ type: Boolean, default: false }) rounded!: boolean;
  @Prop({ type: Boolean, default: false }) icon!: boolean;
  @Prop({ type: [String, Number], default: undefined }) width!: boolean;
  @Prop({ type: [String, Number], default: undefined }) height!: boolean;

  availableRootClasses = {
    disabled: "e-btn--disabled",
    icon: "e-btn--icon",
    depressed: "e-btn--depressed",
    text: "e-btn--text",
    ripple: "v-ripple-element",
    fab: "e-btn--fab",
    block: "e-btn--block",
    outlined: "e-btn--outlined",
    rounded: "e-btn--rounded",
    XSmall: "e-btn--size-x-small",
    small: "e-btn--size-small",
    default: "e-btn--size-default",
    large: "e-btn--size-large",
    XLarge: "e-btn--size-x-large",
  };

  get default(): boolean {
    return !this.small && !this.XSmall && !this.large && !this.XLarge;
  }

  get btnClass(): string {
    return this.rootClass(`e-btn--${this.color} e-btn e-btn--70`);
  }

  get tag(): string {
    return this.$attrs.to ? "router-link" : "button";
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
