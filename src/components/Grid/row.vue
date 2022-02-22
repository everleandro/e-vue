<template>
  <div :class="rootClass('row')"><slot name="default"></slot></div>
</template>

<script lang="ts">
import Common from "@/mixin/common";
import { Component, Prop, Mixins } from "vue-property-decorator";
@Component
export default class ERow extends Mixins(Common) {
  @Prop({ type: Boolean, default: false }) noGutters!: boolean;

  availableRootClasses = {
    noGutters: "no-gutters",
  };
}
</script>
<style lang="scss">
@import "./grid.scss";
</style>
