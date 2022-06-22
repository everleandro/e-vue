<template>
  <hr
    role="separator"
    :aria-orientation="vertical"
    :class="rootClass('e-divider')"
  />
</template>

<script lang="ts">
import Common from "@/mixin/common";
import { Component, Prop, Mixins } from "vue-property-decorator";

@Component
export default class EDivider extends Mixins(Common) {
  @Prop({ type: Boolean, default: false }) vertical!: boolean;

  availableRootClasses = {
    vertical: "e-divider--vertical",
  };
}
</script>
<style lang="scss">
@import "./style.scss";
</style>
