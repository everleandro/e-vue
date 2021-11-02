<template>
  <div
    v-bind="$attrs"
    type="button"
    :is="tag"
    :class="cssClass"
    class="v-btn"
    :style="style"
    v-on="$listeners"
  >
    <span class="e-btn__content--loading">
      <!-- <v-spinner></v-spinner> -->
    </span>
    <span class="e-btn__content">
      <slot name="default"></slot>
    </span>
  </div>
</template>

<script lang="ts">
import Common from "@/mixin/common";
import { Component, Prop, Mixins } from "vue-property-decorator";
@Component
export default class VButton extends Mixins(Common) {
  @Prop({ type: Boolean, default: false }) disabled!: boolean;
  width = 0;
  height = 0;

  private get availableClasses() {
    return {
      disabled: "e-btn--disabled",
      negative: "e-btn--negative",
      transparent: "e-btn--transparent",
      column: "e-btn--column",
      positive: "e-btn--positive",
      brand: "e-btn--brand",
      icon: "e-btn--icon",
      depressed: "e-btn--depressed",
      loading: "e-btn--loading",
      primary: "e-btn--primary",
      xl: "e-btn--xl",
      md: "e-btn--md",
      block: "e-btn--block",
    };
  }
  get tag(): string {
    return this.$attrs.to ? "router-link" : "button";
  }
  get cssClass(): string {
    return `${this.mergeClass(this.availableClasses)} v-ripple-element`;
  }
  style(): any {
    const width = this.width ? { width: `${this.width}px` } : {};
    const height = this.height ? { height: `${this.height}px` } : {};
    return Object.assign(width, height);
  }
}
</script>
<style lang="scss">
.v-btn {
  $btn-font-size: 14px;
  $btn-height: 48px;
  $btn-height-mobile: 50px;
  $btn-line-height: 29px;
  $btn-line-height-mobile: 40px;

  $btn-padding-x: 28px;
  $btn-padding-y: 14px;
  //sm
  $btn-padding-x-md: 28px;
  $btn-padding-y-md: 4px;

  //xl
  $btn-height-xl: 60px;
  $btn-padding-x-xl: 36px;
  $btn-padding-y-xl: 24px;
  text-decoration: none !important;
  color: #fff;
  position: relative;
  border-radius: 0;
  font-size: $btn-font-size;
  line-height: $btn-font-size;
  font-weight: 700;
  text-transform: uppercase;
  user-select: none;
  display: inline-flex;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  width: auto;
  height: $btn-height;

  border: none;
  background-color: #2c373c;

  opacity: 1;
  box-shadow: none;
  -webkit-box-shadow: none;
  transition-duration: 0.28s;
  transition-property: box-shadow, transform, opacity, background-color;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &--column {
    .v-btn__content {
      flex-direction: column;
    }
  }

  &__content {
    padding: $btn-padding-y $btn-padding-x;
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    position: relative;

    &--loading {
      display: none;
      opacity: 0;
      transition-property: opacity;
      transition-duration: 200ms;
    }
  }

  //   &:not(.v-btn--icon) {
  //     @include hover-effect;
  //   }

  &--xl {
    height: $btn-height-xl;

    .v-btn__content {
      padding: $btn-padding-y-xl $btn-padding-x-xl;
    }
  }

  &--md {
    .v-btn__content {
      padding: $btn-padding-y-md $btn-padding-x-md;
    }
  }

  //   &--primary {
  //     background-color: $v-primary;
  //   }

  &--transparent {
    background-color: transparent;
  }

  //   &--positive {
  //     background-color: $v-negative-color;
  //   }

  //   &--negative {
  //     background-color: $v-positive-color;
  //   }

  //   &--brand {
  //     background-color: $gymapp-color-principal;
  //   }

  &--loading {
    cursor: not-allowed;
    pointer-events: none;

    .v-btn__content {
      display: none;

      &--loading {
        height: 100%;
        display: flex;
        align-items: center;
        opacity: 1;
      }
    }
  }

  &--disabled {
    cursor: default;
    pointer-events: none;
    background-color: #dbdbdb;
    pointer-events: none;
    color: white;
  }

  &--icon {
    position: relative;
    padding: 0;
    border-radius: 99999px;
    overflow: visible;
    background-color: transparent;
    width: $btn-height;

    .v-btn__content {
      //   @include active-radio-effect(calc(#{$btn-height} - 8px), black, 6px);
      display: flex;
      padding: 0;
      justify-content: center;
      align-items: center;
      width: calc(#{$btn-height} - 8px);
      height: calc(#{$btn-height} - 8px);
    }

    &:active {
      &:after {
        transition-duration: 30ms;
      }
    }

    i {
      font-size: 25px;
      color: #2c373c;
    }
  }

  //   &:active {
  //     &:not(.v-btn--icon):not(.v-btn--depressed) {
  //         @include elevated;
  //     }
  //   }

  &--block {
    width: 100%;
    flex: 1;
  }

  &:hover {
    border: none;
  }
}
</style>
