<template>
  <div class="e-card__content">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class ECardContent extends Vue {}
</script>
