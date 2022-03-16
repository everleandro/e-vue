<template>
  <main :class="rootClass('e-main')" :style="style">
    <slot />
  </main>
</template>

<script lang="ts">
import Common from "@/mixin/common";
import { Component, Mixins } from "vue-property-decorator";

@Component({ name: "e-main" })
export default class EApp extends Mixins(Common) {
  availableRootClasses = {};
  style = {};
  layoutStyle(property: Record<string, string>): void {
    const result: Record<string, string> = {};
    Object.keys(property).forEach((key) => {
      result[`padding-${key}`] = property[key];
    });
    this.style = { ...this.style, ...result };
  }
}
</script>