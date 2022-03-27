<template>
  <div :class="rootClass('e-container')">
    <slot />
  </div>
</template>

<script lang="ts">
import Common from "@/mixin/common";
import { Component, Mixins } from "vue-property-decorator";

@Component({ name: "e-container" })
export default class EApp extends Mixins(Common) {
  availableRootClasses = {};
}
</script>