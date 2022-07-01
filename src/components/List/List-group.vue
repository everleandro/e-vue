<template>
  <div role="listbox" :class="groupCLass">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Common from "@/mixin/common";
import { Component, Prop, Mixins } from "vue-property-decorator";

@Component({ name: "e-list-group" })
export default class EListGroup extends Mixins(Common) {
  @Prop({ type: Boolean, default: false }) disabled!: boolean;
  @Prop({ type: String, default: "primary" }) color!: string;
  @Prop({ type: String, default: undefined }) itemValue!: string;
  @Prop({ default: null }) value!: never;

  availableRootClasses = {};
  get groupCLass(): string {
    return this.rootClass(`e-list-group ${this.colorText(this.color)}`);
  }
  get model(): never {
    return this.value;
  }
  set model(val: never) {
    this.$emit("input", val);
  }
}
</script>
<style lang="scss"></style>
