<template>
  <transition></transition>
</template>

<script lang="ts">
import Common from "@/mixin/common";
import { Component, Prop, Mixins } from "vue-property-decorator";

@Component
export default class EButton extends Mixins(Common) {
  function collaborators_map(json: any): Map<string, Set<string>> {
}
</script>
<style lang="scss">
@import "./style.scss";
</style>
