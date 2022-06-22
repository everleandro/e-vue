<template>
  <div class="e-expansion" :class="rootClass('e-expansion')">
    <div class="e-expansion__header" :style="headerStyle" @click="toggle()">
      <h4 class="e-expansion__header-content">
        <slot name="header">
          {{ headerTitle }}
        </slot>
      </h4>
      <div class="e-expansion__header-icon">
        <i class="mdi mdi-chevron-down"></i>
      </div>
    </div>
    <div class="e-expansion__body">
      <e-expand-transition>
        <div v-show="opened" class="e-expansion__body-content">
          <slot name="default"></slot>
        </div>
      </e-expand-transition>
    </div>
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
  get headerStyle(): Record<string, string> {
    return {
      minHeight: `${this.height}px`,
      height: `${this.height}px`,
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
