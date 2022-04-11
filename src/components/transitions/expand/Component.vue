<template>
  <transition
    name="e-expand"
    @enter="enter"
    @after-enter="afterEnter"
    @leave="leave"
  >
    <slot />
  </transition>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({ name: "e-expand-transition" })
export default class EExpandTransition extends Vue {
  enter(element: HTMLElement): void {
    element.style.width = getComputedStyle(element).width;
    element.style.position = "absolute";
    element.style.visibility = "hidden";
    element.style.height = "auto";

    const height = getComputedStyle(element).height;

    element.style.width = "";
    element.style.position = "";
    element.style.visibility = "";
    element.style.height = "0px";

    // Force repaints to make sure the
    // animation is triggered correctly.
    getComputedStyle(element).height;

    // Trigger the animation.
    // We use `requestAnimationFrame` because we need
    // to make sure the browser has finished
    // painting after setting the `height`
    // to `0` in the line above.
    requestAnimationFrame(() => {
      element.style.height = height;
    });
  }
  afterEnter(element: HTMLElement): void {
    element.style.height = "auto";
  }
  leave(element: HTMLElement): void {
    element.style.height = getComputedStyle(element).height;

    // Force repaints to make sure the
    // animation is triggered correctly.
    getComputedStyle(element).height;

    requestAnimationFrame(() => {
      element.style.height = "0";
    });
  }
}
</script>
<style lang="scss">
.e-expand {
  &-enter-active,
  &-leave-active {
    transition: height 0.25s ease-in-out;
    overflow: hidden;
  }
  &-enter,
  &-leave-to {
    height: 0;
  }
}
</style>
