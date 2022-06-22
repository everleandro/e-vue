<template>
  <div class="e-expansion__body-content">
    <slot name="default"></slot>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({ name: "e-expansion-content" })
export default class EExpansionContent extends Vue {}
</script>
