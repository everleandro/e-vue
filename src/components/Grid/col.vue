<template>
  <div :class="rootClass('e-col', gridClass)">
    <slot name="default"></slot>
  </div>
</template>

<script lang="ts">
import Common from "@/mixin/common";
import GridMixin from "@/mixin/grid";
import { Component, Mixins } from "vue-property-decorator";

@Component
export default class ECol extends Mixins(Common, GridMixin) {
  availableRootClasses = {};
}
</script>
