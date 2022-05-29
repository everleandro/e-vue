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
    childStyleObject: Record<string, Record<string, string>>
  ): void {
    const childName = Object.keys(childStyleObject);
    const childList = this.$children.filter((child) => {
      return !!childName.find((name) => name === child.$options.name);
    });
    childList.forEach((child) => {
      const key = child.$options.name;
      if (key) {
        (child as any).appLayoutStyle = {
          ...(child as any).appLayoutStyle,
          ...childStyleObject[key],
        };
      }
    });
  }
}
</script>
<style lang="scss">
@import "./style.scss";
</style>
