<template>
  <div>
    <span class="v-btn__content">
      <slot name="default"></slot>
    </span>
  </div>
</template>

<script lang="ts">
import Common from "@/mixin/common";
import { Component, Mixins } from "vue-property-decorator";

@Component
export default class EList extends Mixins(Common) {}
</script>
<style lang="scss">
@import "./list.scss";
</style>
