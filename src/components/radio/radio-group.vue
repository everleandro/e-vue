<template>
  <div :class="rootClass('e-field--selection-controls  e-field--radio-group')">
    <div class="e-field__control">
      <div class="e-field__slot" style="height: auto">
        <div
          role="radiogroup"
          :aria-labelledby="id"
          class="e-field--radio-group__field"
        >
          <slot></slot>
        </div>
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
import { Component, Mixins, Prop, Watch } from "vue-property-decorator";
import Radio from "@/components/radio/radio.vue";
@Component({ name: "e-radio-group" })
export default class ERadioGroup extends Mixins(Common, Field) {
  @Prop({ type: Boolean, default: false }) mandatory!: boolean;
  @Prop({ type: Boolean, default: false }) row!: boolean;
  @Prop({}) defaultValue!: null;
  localValue = null;
  availableRootClasses = {
    disabled: "e-field--is-disabled",
    readonly: "e-field--is-readonly",
    column: "e-field--radio-group--column",
    row: "e-field--radio-group--row",
  };

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
