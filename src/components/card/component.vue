<template>
  <div class="e-card" :style="cardStyle">
    <button
      class="e-button e-icon card-icon-close"
      :style="buttonIconCloseStyle"
    >
      <i :class="closeIconClass"></i>
    </button>
    <div class="e-card-image">
      <img src="https://picsum.photos/id/11/500/300" alt="ad" />
    </div>
    <div class="e-card-content">contenido</div>
    <div class="e-card-actions">
      <v-slot name="actions"></v-slot>
    </div>
  </div>
</template>

<script lang="ts">
import Common from "@/mixin/common";
import { Component, Prop, Mixins } from "vue-property-decorator";

@Component
export default class ECard extends Mixins(Common) {
  @Prop({ type: String, default: undefined }) height!: string;
  @Prop({ type: String, default: "left-top" }) iconCloseStylePosition!: string;
  availableRootClasses = {};
  get cardStyle(): Record<string, string> {
    const _height = this.height ? `${this.height}px` : "auto";
    const heigth = {
      maxHeight: _height,
      minHeight: _height,
      height: _height,
    };

    return heigth;
  }
  get closeIconClass(): string {
    const icon =
      getComputedStyle(document.body).getPropertyValue(
        "--icon-action-select"
      ) || "mdi mdi-chevron-down";
    return `${icon} e-icon`;
  }
  get buttonIconCloseStyle(): string {
    const icon =
      getComputedStyle(document.body).getPropertyValue("--icon-close") ||
      "mdi mdi-chevron-down";
    return `${icon} e-icon`;
  }
}
</script>
<style lang="scss">
@import "./style.scss";
</style>
