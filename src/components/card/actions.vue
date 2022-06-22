<template>
  <div class="e-card__actions">
    <div class="e-card__actions-content">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class ECardActions extends Vue {}
</script>
