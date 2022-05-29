<template>
  <main :class="rootClass('e-main')" :style="appLayoutStyle">
    <div class="e-main__wrapper">
      <slot />
    </div>
  </main>
</template>

<script lang="ts">
import Common from "@/mixin/common";
import { Component, Mixins } from "vue-property-decorator";

@Component({ name: "e-main" })
export default class EApp extends Mixins(Common) {
  availableRootClasses = {};
  appLayoutStyle = {};
}
</script>
