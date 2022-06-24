<template>
  <transition name="fade">
    <div
      v-show="active"
      role="dialog"
      ref="dialog"
      aria-modal="true"
      class="e-dialog__content"
      tabindex="0"
      @click.self="close()"
    >
      <transition name="scale">
        <div v-show="active" :class="rootClass('e-dialog')" :style="style()">
          <slot></slot>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script lang="ts">
import Common from "@/mixin/common";
import { Component, Prop, Mixins, Watch } from "vue-property-decorator";

@Component({ name: "e-dialog" })
export default class EDialog extends Mixins(Common) {
  @Prop({ type: Boolean, default: false }) fullscreen!: boolean;
  @Prop({ type: Boolean, default: false }) value!: boolean;
  @Prop({ type: Boolean, default: false }) persistent!: boolean;
  @Prop({ type: [Number, String], default: null }) maxWidth!: string | number;
  animated = false;
  active = false;
  immediate = false;

  @Watch("value")
  onValueChanged(val: boolean): void {
    if (val) {
      document.addEventListener("keydown", this.handleExcListener);
    } else {
      document.removeEventListener("keydown", this.handleExcListener);
    }
    if (this.immediate) {
      this.active = val;
    } else {
      setTimeout(() => {
        this.active = val;
      }, 200);
    }
    this.immediate = false;
  }

  availableRootClasses = {
    fullscreen: "e-dialog--fullscreen",
    animated: "e-dialog--animated",
    model: "e-dialog--active",
    persistent: "e-dialog--persistant",
  };

  mounted() {
    this.active = this.model;
  }

  handleExcListener({ key }: KeyboardEvent): void {
    if (key === "Escape") {
      this.close();
    }
  }

  get model(): boolean {
    return this.value;
  }

  set model(val: boolean) {
    this.$emit("input", val);
  }

  style(): { maxWidth?: string } {
    const maxWidth =
      this.maxWidth && !this.fullscreen
        ? { maxWidth: `${this.maxWidth}px` }
        : {};
    return { ...maxWidth };
  }

  close(): void {
    if (this.persistent) {
      this.animated = true;
      setTimeout((): void => {
        this.animated = false;
      }, 200);
    } else {
      this.immediate = true;
      this.model = false;
    }
  }
}
</script>
<style lang="scss">
@import "./dialog.scss";
</style>
