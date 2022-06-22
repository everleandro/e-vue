<template>
  <div :class="componentClass">
    <div class="e-field__control">
      <div class="e-field__slot">
        <label class="e-label" :class="textColorClass" :style="labelStyle">
          {{ label }}
        </label>
        <div
          role="radiogroup"
          :aria-labelledby="id"
          class="e-field--radio-group__field"
        >
          <slot></slot>
        </div>
      </div>
      <div v-if="showDetails" class="e-field__details">
        <div class="e-messages" role="alert">
          <div class="e-messages__wrapper" :class="textColorClass">
            {{ details }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Common from "@/mixin/common";
import Field from "@/mixin/field";
import { Component, Mixins, Prop, Watch } from "vue-property-decorator";
import Radio from "@/components/radio/radio.vue";
import GridMixin from "@/mixin/grid";
@Component({ name: "e-radio-group" })
export default class ERadioGroup extends Mixins(Common, Field, GridMixin) {
  @Prop({ type: Boolean, default: false }) mandatory!: boolean;
  @Prop({ type: Boolean, default: false }) row!: boolean;
  @Prop({ type: Boolean, default: false }) outlined!: boolean;
  @Prop({}) defaultValue!: null;
  localValue = null;
  availableRootClasses = {
    disabled: "e-field--is-disabled",
    readonly: "e-field--is-readonly",
    inputsOutlined: "e-field--outlined",
    column: "e-field--radio-group--column",
    row: "e-field--radio-group--row",
    outlined: "e-field--outlined",
  };
  get componentClass(): string {
    return this.rootClass(
      `'e-field--selection-controls e-field e-field--radio-group'`,
      { ...this.availableRootClasses, ...this.gridClass }
    );
  }

  @Watch("disabled")
  onDisabledChanged(): void {
    this.setDisabledChildsState();
  }

  @Watch("readonly")
  onReadonlyChanged(): void {
    this.setReadonlyChildsState();
  }
  get column(): boolean {
    return !this.row;
  }

  mounted(): void {
    this.init();
  }

  init(): void {
    if (this.defaultValue) {
      this.model = this.defaultValue;
    } else if (this.mandatory && this.$children.length > 0) {
      this.model = (this.$children[0] as Radio).inputValue;
    }
    this.setReadonlyChildsState();
    this.setDisabledChildsState();
  }
  setReadonlyChildsState(): void {
    this.$children.forEach((radio) => {
      (radio as Radio).localReadonly = this.readonly;
    });
  }
  setDisabledChildsState(): void {
    this.$children.forEach((radio) => {
      (radio as Radio).localDisabled = this.disabled;
    });
  }
}
</script>
<style lang="scss">
@import "./radio.scss";
</style>
