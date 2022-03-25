<template>
  <div :class="rootClass('e-field e-text-field ' + textColorClass)">
    <div class="e-field__control">
      <div class="e-field__slot">
        <div v-if="prependIcon" class="e-field__prepend-inner">
          <div class="e-field__icon e-field__icon--prepend-inner">
            <i aria-hidden="true" :class="prependIcon"></i>
          </div>
        </div>
        <div class="e-text-field__slot">
          <label :for="id" class="e-label"> {{ label }}</label>
          <input
            v-model="model"
            v-bind="$attrs"
            :id="id"
            :maxlength="limit"
            :type="type"
            @blur="handleBlur"
            @focus="handleFocus"
          />
        </div>
        <div v-if="appendIcon" class="e-field__append-inner">
          <div class="e-field__icon e-field__icon--append">
            <i aria-hidden="true" :class="appendIcon"></i>
          </div>
        </div>
      </div>
      <div v-if="!dense" class="e-field__details">
        <div class="e-messages" role="alert">
          <div class="e-messages__wrapper" :class="textColorClass">
            {{ details }}
          </div>
        </div>
        <div v-if="counter" class="e-counter" :class="textColorClass">
          {{ model.length }}
          <template v-if="limit"> / {{ limit }} </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Common from "@/mixin/common";
import Field from "@/mixin/field";
import { Component, Mixins, Prop } from "vue-property-decorator";
@Component({ name: "e-text-field" })
export default class TextField extends Mixins(Common, Field) {
  @Prop({ type: Boolean, default: false }) outlined!: boolean;
  @Prop({ type: String, default: null }) prependIcon!: boolean;
  @Prop({ type: String, default: "text" }) type!: string;
  @Prop({ type: String, default: null }) appendIcon!: boolean;
  localValue = "";
  focused = false;
  availableRootClasses = {
    disabled: "e-field--is-disabled",
    readonly: "e-field--is-readonly",
    hasError: "e-field--has-error",
    outlined: "e-text-field--outlined",
    focused: "e-text-field--is-focused",
  };
  handleBlur(evt: InputEvent): void {
    this.focused = false;
    this.$emit("blur", evt);
  }
  handleFocus(evt: InputEvent): void {
    this.focused = true;
    this.$emit("focus", evt);
  }
  get textColorClass(): string {
    return this.hasError
      ? `error--text`
      : this.focused
      ? `${this.rootColor}--text`
      : "";
  }
}
</script>
<style lang="scss">
@import "./text-field.scss";
</style>
