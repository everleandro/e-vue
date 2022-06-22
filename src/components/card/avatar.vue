<template>
  <div class="e-card__avatar">
    <div class="e-card__avatar-content">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class ECardAvatar extends Vue {}
</script>
