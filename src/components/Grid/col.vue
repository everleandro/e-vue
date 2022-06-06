<template>
  <div :class="rootClass('e-col')">
    <slot name="default"></slot>
  </div>
</template>

<script lang="ts">
import Common from "@/mixin/common";
import { Component, Mixins } from "vue-property-decorator";

@Component
export default class ECol extends Mixins(Common) {}
</script>
