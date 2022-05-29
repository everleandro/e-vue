<template>
  <div role="list" :class="listCLass">
    <slot />
  </div>
</template>

<script lang="ts">
import Common from "@/mixin/common";
import { Component, Prop, Mixins } from "vue-property-decorator";

@Component({ name: "e-list" })
export default class EList extends Mixins(Common) {
  @Prop({ type: Boolean, default: false }) disabled!: boolean;
  @Prop({ type: Boolean, default: true }) depressed!: boolean;
  @Prop({ type: Boolean, default: false }) outlined!: boolean;
  @Prop({ type: String, default: "primary" }) color!: string;

  availableRootClasses = {
    disabled: "e-list--disabled",
    depressed: "e-list--depressed",
    outlined: "e-list--outlined",
  };
  get listCLass(): string {
    return this.rootClass(`e-list ${this.colorText(this.color)}`);
  }
}
</script>
<style lang="scss">
@import "./style.scss";
</style>
