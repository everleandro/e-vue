<template>
  <div :class="rootClass('e-radio ' + rootColor + '--text')" @click="change()">
    <div class="e-field--selection-controls__field">
      <span aria-hidden="true" class="e-icon" :class="rootColor + '--text'"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          role="img"
          aria-hidden="true"
          class="e-icon__svg"
        >
          <path
            v-if="active"
            d="M12,20C7.58,20 4,16.42 4,12C4,7.58 7.58,4 12,4C16.42,4 20,7.58 20,12C20,16.42 16.42,20 12,20M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2M12,7C9.24,7 7,9.24 7,12C7,14.76 9.24,17 12,17C14.76,17 17,14.76 17,12C17,9.24 14.76,7 12,7Z"
          ></path>
          <path
            v-else
            d="M12,20C7.58,20 4,16.42 4,12C4,7.58 7.58,4 12,4C16.42,4 20,7.58 20,12C20,16.42 16.42,20 12,20M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z"
          ></path>
        </svg>
      </span>
      <input
        :aria-checked="active"
        :id="id"
        role="radio"
        type="radio"
        :name="id"
        :value="inputValue"
      />
      <div
        v-ripple="{ center: true }"
        class="e-field--selection-controls__ripple"
        :class="rootColor + '--text'"
      ></div>
    </div>
    <label class="e-label" style="left: 0px; right: auto; position: relative">
      <slot name="label"> {{ label }} </slot>
    </label>
  </div>
</template>

<script lang="ts">
import Common from "@/mixin/common";
import Field from "@/mixin/field";
import { Component, Mixins, Prop } from "vue-property-decorator";
import RadioGroup from "@/components/radio/radio-group.vue";
@Component
export default class Radio extends Mixins(Common, Field) {
  @Prop({ default: null, required: true }) inputValue!: null;
  localDisabled = false;
  localReadonly = false;

  localValue = false;
  availableRootClasses = {
    disabled: "e-field--is-disabled",
    localDisabled: "e-field--is-disabled",
    localReadonly: "e-field--is-readonly",
    readonly: "e-field--is-readonly",
  };
  get active(): boolean {
    return (this.$parent as RadioGroup).model === this.inputValue;
  }
  change(): void {
    if (!this.readonly) (this.$parent as RadioGroup).model = this.inputValue;
  }
}
</script>
<style lang="scss">
@import "./radio.scss";
</style>
