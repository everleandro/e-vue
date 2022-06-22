<template>
  <div class="e-expansion" :class="rootClass('e-expansion')">
    <div class="e-expansion__header" :style="headerStyle" @click="toggle()">
      <h4 class="e-expansion__header-content">
        <slot name="header">
          {{ headerTitle }}
        </slot>
      </h4>
      <div class="e-expansion__header-icon">
        <i :class="iconExpandClass"></i>
      </div>
    </div>
    <e-expand-transition>
      <div v-show="opened" class="e-expansion__body">
        <slot name="default"></slot>
        <div class="e-expansion__body-content">

        </div>
      </div>
    </e-expand-transition>
  </div>
</template>
<script lang="ts">
import Common from "@/mixin/common";
import { Component, Prop, Mixins } from "vue-property-decorator";
import EExpandTransition from "@/components/transitions/expand/Component.vue";

@Component({ name: "e-bar", components: { EExpandTransition } })
export default class EExpansion extends Mixins(Common) {
  @Prop({ type: Boolean, default: false }) dense!: boolean;
  @Prop({ type: String, default: undefined }) headerTitle!: boolean;
  @Prop({ type: String, default: "40px" }) height!: string;
  @Prop({ type: [Boolean], default: undefined }) value!: boolean;

  availableRootClasses = {
    dense: "e-expansion--dense",
    opened: "e-expansion--opened",
  };
  localValue = true;

  get opened(): boolean {
    return (this.value as never) === undefined ? this.localValue : this.value;
  }

  set opened(value: boolean) {
    if ((this.value as never) === undefined) {
      this.localValue = value;
    } else {
      this.$emit("input", value);
    }
  }
  get iconExpandClass(): string {
    return (
      getComputedStyle(document.body).getPropertyValue("--icon-expand") ||
      "mdissss mdi-chevron-down"
    );
  }
  get headerStyle(): Record<string, string> {
    return {
      minHeight: `${this.height}`,
      maxHeight: `${this.height}`,
      height: `${this.height}`,
    };
  }
  toggle(): void {
    this.opened = !this.opened;
  }
}
</script>
<style lang="scss">
@import "./style.scss";
</style>