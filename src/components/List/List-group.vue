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
  @Prop({ default: null }) value!: any;

  availableRootClasses = {};
  get groupCLass() {
    return this.rootClass(`e-list-group ${this.colorText(this.color)}`);
  }
  get model(): any {
    return this.value;
  }
  set model(val: any) {
    this.$emit("input", val);
  }
}
</script>
<style lang="scss">
</style>
