<template>
  <span
    v-if="path"
    aria-hidden="true"
    :class="rootClass(iconClass)"
    v-on="$listeners"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      role="img"
      aria-hidden="true"
      class="e-icon__svg"
    >
      <path
        v-for="(line, i) in path"
        v-bind="bindPathTrributes(line)"
        :key="i"
      ></path>
    </svg>
  </span>
  <i v-else :class="rootClass(iconClass)" v-on="$listeners">
    <slot />
  </i>
</template>

<script lang="ts">
import Common from "@/mixin/common";
import { Component, Prop, Mixins } from "vue-property-decorator";
import { VNode } from "vue";
@Component
export default class EIcon extends Mixins(Common) {
  @Prop({ type: String, default: "" }) color!: string;
  @Prop({ type: Boolean, default: false }) disabled!: boolean;
  @Prop({ type: [Array], default: null })
  path!: Array<string> | Array<Record<string, string>>;

  @Prop({ type: Boolean, default: false }) small!: boolean;
  @Prop({ type: Boolean, default: false }) XSmall!: boolean;
  @Prop({ type: Boolean, default: false }) large!: boolean;
  @Prop({ type: Boolean, default: false }) XLarge!: boolean;

  availableRootClasses = {
    XSmall: "e-icon--size-x-small",
    small: "e-icon--size-small",
    default: "e-icon--size-default",
    disabled: "e-icon--disabled",
    large: "e-icon--size-large",
    XLarge: "e-icon--size-x-large",
  };

  get default(): boolean {
    return !this.small && !this.XSmall && !this.large && !this.XLarge;
  }

  bindPathTrributes(
    path: string | Record<string, string>
  ): Record<string, string> {
    const d = typeof path === "string" ? path : path?.d;
    let result: Record<string, string> = { d };
    if (typeof path === "object" && path?.fill) {
      result.class = `${path.fill}--text`;
    }
    return result;
  }

  get iconClass(): string {
    const defaultVNode: VNode | undefined = (this.$slots?.default || [])[0];
    let result = "e-icon";
    if (defaultVNode) {
      result += ` ${defaultVNode.text}`;
    }
    if (this.color) {
      result += ` ${this.color}--text`;
    }
    return result;
  }
}
</script>
<style lang="scss">
@import "./icon.scss";
</style>
