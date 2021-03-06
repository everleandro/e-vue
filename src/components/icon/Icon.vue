<template>
  <span
    v-if="path"
    aria-hidden="true"
    :class="rootClass(iconClass)"
    v-on="$listeners"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      :viewBox="viewBox"
      role="img"
      aria-hidden="true"
      class="e-icon__svg"
    >
      <path
        v-for="(line, i) in path"
        v-bind="bindPathTributes(line)"
        :key="i"
      ></path>
    </svg>
  </span>
  <i v-else :class="rootClass(iconClass)" v-on="$listeners" ref="i">
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
  @Prop({ type: String, default: "0 0 24 24" }) viewBox!: string;
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
  iconClass = "";

  get default(): boolean {
    return !this.small && !this.XSmall && !this.large && !this.XLarge;
  }

  bindPathTributes(
    path: string | Record<string, string>
  ): Record<string, string> {
    const d = typeof path === "string" ? path : path?.d;
    let result: Record<string, string> = { d };
    if (typeof path === "object" && path?.fill) {
      result.class = `${path.fill}--text`;
    }
    return result;
  }
  mounted(): void {
    this.setIconClass();
  }
  updated(): void {
    this.setIconClass();
  }

  setIconClass(): void {
    const defaultVNode: VNode | undefined = (this.$slots?.default || [])[0];
    let result = "e-icon";
    if (defaultVNode) {
      result += ` ${defaultVNode.text}`;
      this.$nextTick(() => {
        const element: Element | undefined = this.$refs.i as Element;
        if (element) {
          element.innerHTML = "";
        }
      });
      // defaultVNode.innerHTML = '';
    }
    if (this.color) {
      result += ` ${this.color}--text`;
    }
    this.iconClass = result;
  }
}
</script>
<style lang="scss">
@import "./icon.scss";
</style>
