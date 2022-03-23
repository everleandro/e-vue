<template>
  <div
    :is="tag"
    v-click-outside="handleOtside"
    :class="rootClass('e-drawer')"
    :style="style"
  >
    <div v-if="right" class="e-drawer__border"></div>
    <div class="e-drawer__content" :style="{ width: `${width}px` }">
      <slot></slot>
    </div>
    <div v-if="!right" class="e-drawer__border"></div>
  </div>
</template>

<script lang="ts">
import Common from "@/mixin/common";
import { Component, Prop, Mixins, Watch } from "vue-property-decorator";
import EApp from "@/components/app/app.vue";

@Component({ name: "e-drawer" })
export default class EDrawer extends Mixins(Common) {
  @Prop({ type: Boolean, default: false }) value!: boolean;
  @Prop({ type: Boolean, default: false }) absolute!: boolean;
  @Prop({ type: Boolean, default: false }) nav!: boolean;
  @Prop({ type: Boolean, default: false }) right!: boolean;
  @Prop({ type: [String, Number], default: 256 }) width!: string | number;

  overlayNode: HTMLElement | null = null;

  availableRootClasses = {
    disabled: "e-drawer--disabled",
    value: "e-drawer--open",
    right: "e-drawer--right",
    absoluteComputed: "e-drawer--absolute",
    close: "e-drawer--close",
  };
  mdBreakpoint = false;
  appLayoutStyle: Record<string, string> = {};

  @Watch("model", { immediate: true, deep: true })
  onModelChanged(): void {
    this.setOverlay();
    this.refreshLayoutStyle();
  }

  @Watch("mdBreakpoint", { immediate: true, deep: true })
  onMdBreakpointChanged(value: boolean): void {
    this.setOverlay();
    this.refreshLayoutStyle();
  }

  get absoluteComputed(): boolean {
    return this.absolute || this.mdBreakpoint;
  }

  get tag(): string {
    return this.nav ? "nav" : "aside";
  }
  get close(): boolean {
    return !this.value;
  }
  get model(): boolean {
    return this.value;
  }
  set model(value: boolean) {
    this.$emit("input", value);
  }
  mounted(): void {
    this.setOverlay();
    this.observeBreakpoint();
    this.refreshLayoutStyle();
    this.$nextTick(function () {
      window?.addEventListener("resize", this.observeBreakpoint);
    });
  }
  destroy() {
    window?.removeEventListener("resize", this.observeBreakpoint);
    this.destroyOverlay();
  }
  handleOtside() {
    if (this.absoluteComputed && this.model) {
      this.model = false;
      this.destroyOverlay();
    }
  }

  refreshLayoutStyle(): void {
    const parent = this.$parent as EApp;
    if (parent.$options.name === "e-app") {
      const property = this.right ? "right" : "left";
      const propertyValue =
        this.absoluteComputed || !this.model ? "0px" : `${this.width}px`;

      parent.updateChildrenStyle({
        "e-main": { [`padding-${property}`]: propertyValue },
        "e-bar": { [property]: propertyValue },
      });
    }
  }
  observeBreakpoint(): void {
    const windowWidth = window?.innerWidth;
    const mdValue = getComputedStyle(document.body).getPropertyValue("--md");
    this.mdBreakpoint = windowWidth <= parseInt(mdValue);
  }
  setOverlay(): void {
    if (this.model && (this.absolute || this.mdBreakpoint)) {
      if (!this.overlayNode) {
        const parent: HTMLElement = document.body || new HTMLElement();
        const overlayNode = document.createElement("div");
        parent.prepend(overlayNode);
        overlayNode.className = "e-overlay";
        setTimeout(() => {
          overlayNode.className = "e-overlay e-overlay--active";
        }, 0);
        this.overlayNode = overlayNode;
      }
    } else {
      this.destroyOverlay();
    }
  }
  destroyOverlay(): void {
    if (this.overlayNode) {
      this.overlayNode.className = "e-overlay e-overlay--inactive";
      setTimeout(() => {
        this.overlayNode && this.overlayNode.remove();
        this.overlayNode = null;
      }, 300);
    }
  }
  get style(): Record<string, string> {
    const translateX = this.model ? "0%" : `${this.right ? "" : "-"}100%`;
    const result: Record<string, string> = {
      height: "100%",
      top: "0px",
      transform: `translateX(${translateX})`,
    };
    const appLayoutStyleCopy = { ...this.appLayoutStyle };
    if (this.absoluteComputed) {
      delete appLayoutStyleCopy["padding-top"];
    }
    return { ...result, ...appLayoutStyleCopy };
  }
}
</script>
<style lang="scss">
@import "./style.scss";
</style>
