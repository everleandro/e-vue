<template>
  <div :class="rootClass('e-app')" id="app">
    <slot />
  </div>
</template>

<script lang="ts">
import Common from "@/mixin/common";
import { Component, Prop, Mixins } from "vue-property-decorator";

@Component({ name: "e-app" })
export default class EApp extends Mixins(Common) {
  @Prop({ type: String, default: "" }) theme!: string;

  availableRootClasses = {};

  updateChildrenStyle(
    fieldsNames: Array<string>,
    property: Record<string, string>
  ): void {
    const childList = this.$children.filter((child) => {
      return !!fieldsNames.find((name) => name === child.$options.name);
    });
    childList.forEach((child) => {
      (child as any).layoutStyle(property);
    });
  }
}
</script>
<style lang="scss">
@import "./style.scss";
</style>
