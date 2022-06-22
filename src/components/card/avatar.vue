<template>
  <div :class="rootClass('e-card')" :style="cardStyle">
    <button
      v-ripple
      class="
        e-btn e-btn--depressed e-btn--fab e-btn--size-x-small
        v-ripple-element
        e-card__icon-close
      "
      :class="`${closeColor}--text`"
      :style="buttonCloseStyle"
      @click="$emit('click:close', $event)"
    >
      <span>
        <i :class="closeIconClass"></i>
      </span>
    </button>
    <div class="e-card__avatar">
      <div class="e-card__avatar-content">
        <slot name="avatar"></slot>
      </div>
    </div>
    <div class="e-card__content">
      <slot></slot>
    </div>
    <div class="e-card__actions">
      <div class="e-card__actions-content">
        <slot name="actions"></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Common from "@/mixin/common";
import { Component, Mixins, Prop } from "vue-property-decorator";

@Component
export default class ECard extends Mixins(Common) {
  @Prop({ type: String, default: undefined }) height!: string;
  @Prop({ type: String, default: "top-left" }) closePosition!: string;
  @Prop({ type: String, default: "grey" }) closeColor!: string;
  @Prop({ type: Boolean, default: true }) depressed!: boolean;
  availableRootClasses = {
    withCloseButton: "e-card--with-close-button",
    depressed: "e-card--depressed",
  };
  buttonCloseStyle = "";
  get cardStyle(): Record<string, string> {
    const _height = this.height ? `${this.height}px` : "auto";
    return {
      maxHeight: _height,
      minHeight: _height,
      height: _height,
    };
  }
  get withCloseButton(): boolean {
    return !!this.closePosition;
  }
  get closeIconClass(): string {
    const icon =
      getComputedStyle(document.body).getPropertyValue("--icon-close") ||
      "mdi mdi-chevron-down";
    return `${icon} e-icon e-icon--size-default`;
  }

  mounted(): void {
    this.$nextTick(() => {
      const color =
        this.$el &&
        getComputedStyle(this.$el.parentNode as Element).getPropertyValue(
          "background-color"
        );
      const position = this.closePosition
        .split("-")
        .map((key) => `${key}:0;margin-${key}:-16px`)
        .join(";");
      this.buttonCloseStyle = `background-color:${color};${position}`;
    });
  }
}
</script>
<style lang="scss">
@import "./style.scss";
</style>
