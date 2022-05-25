<template>
  <div
    :class="
      rootClass(
        'e-field e-field--selection-controls e-field--checkbox ' +
          rootColor +
          '--text'
      )
    "
  >
    <div class="e-field__control">
      <div class="e-field__slot">
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
                v-if="checked"
                d="M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3Z"
              ></path>
              <path
                v-else
                d="M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z"
              ></path>
            </svg>
          </span>
          <input
            aria-checked="true"
            :id="id"
            role="checkbox"
            type="checkbox"
            @input="change"
            :value="checked"
          />
          <div
            v-ripple="{ center: true }"
            class="e-field--selection-controls__ripple"
            :class="rootColor + '--text'"
            @click="change"
          ></div>
        </div>
        <label :for="id" class="e-label" :style="labelStyle">
          {{ label }}
        </label>
      </div>
      <div v-if="!dense" class="e-messages" :class="rootColor + '--text'">
        <div class="e-messages__wrapper">{{ details }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Common from "@/mixin/common";
import Field from "@/mixin/field";
import { Component, Prop, Mixins } from "vue-property-decorator";
@Component({ name: "e-checkbox" })
export default class ECheckbox extends Mixins(Common, Field) {
  @Prop({ type: Boolean, default: true })
  outlined!: boolean;
  @Prop({ type: [Boolean, String, Number], default: false })
  falseValue!: boolean;
  @Prop({ type: [Boolean, String, Number], default: true })
  @Prop({ type: [Boolean, String, Number], default: true })
  trueValue!: boolean;

  localValue = false;
  availableRootClasses = {
    disabled: "e-field--is-disabled",
    dense: "e-field--dense",
    readonly: "e-field--is-readonly",
    outlined: "e-field--outlined",
  };

  get checked(): boolean {
    return this.model === this.trueValue;
  }
  change(): void {
    if (!this.readonly) {
      const val = this.checked ? this.falseValue : this.trueValue;
      this.model = val;
      if (this.$parent.$options.name === "v-checkbox-group") {
        (this.$parent as any).updateModel({
          value: val,
          trueValue: this.trueValue,
        });
      } else {
        this.model = val;
      }
    }
  }
}
</script>
<style lang="scss">
@import "./checkbox.scss";
</style>
