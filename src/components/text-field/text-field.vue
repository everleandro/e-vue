<template>
  <div :class="componentClass">
    <div class="e-field__control">
      <div class="e-field__slot">
        <div v-if="prependIcon" class="e-field__prepend-inner">
          <div class="e-field__icon e-field__icon--prepend-inner">
            <i
              aria-hidden="true"
              class="e-icon e-icon--size-default"
              :class="prependIcon"
            ></i>
          </div>
        </div>
        <div
          class="e-text-field__slot"
          @mouseenter="handleHover(true)"
          @mouseleave="handleHover(false)"
        >
          <label
            :for="id"
            class="e-label"
            :class="textColorClass"
            :style="labelStyle"
          >
            <slot name="label">{{ label }}{{detailError}}</slot>
          </label>
          <div
            v-if="prefix"
            :class="[textColorClass, 'e-field__prefix']"
            @click="setInputFocus"
          >
            {{ prefix }}
          </div>
          <input
            ref="input"
            :id="id"
            :value="model"
            class="input--text"
            :maxlength="limit"
            :style="inputStyle"
            :type="type"
            :placeholder="placeholder"
            @blur="handleBlur"
            @input="handleInput"
            @focus="handleFocus"
          />
          <div
            v-if="suffix"
            :class="[textColorClass, 'e-field__suffix']"
            @click="setInputFocus"
          >
            {{ suffix }}
          </div>
        </div>
        <div v-show="showClearable" class="e-field__append-inner">
          <div class="e-field__icon e-field__icon--clear e-icon--size-default">
            <button
              type="button"
              aria-label="clear icon"
              v-ripple
              class="e-btn e-btn--icon e-btn--size-x-small v-ripple-element"
              @click="clear"
            >
              <i v-if="iconClearClass" :class="iconClearClass"></i>
              <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                role="img"
                aria-hidden="true"
                class="e-icon__svg"
              >
                <path
                  d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div v-if="appendIcon" class="e-field__append-inner">
          <div class="e-field__icon e-field__icon--append">
            <i
              aria-hidden="true"
              class="e-icon e-icon--size-default"
              :class="appendIcon"
            ></i>
          </div>
        </div>
      </div>
      <transition name="scale">
        <div v-if="showDetails" class="e-field__details">
          <div class="e-messages" role="alert">
            <div class="e-messages__wrapper" :class="textColorClass">
              {{ details }}
            </div>
          </div>
          <div
            v-if="counter || limit"
            class="e-counter"
            :class="textColorClass"
          >
            {{ model.length }}
            <template v-if="limit"> / {{ limit }}</template>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
import Common from "@/mixin/common";
import Field from "@/mixin/field";
import { Component, Mixins, Prop, Watch } from "vue-property-decorator";
import GridMixin from "@/mixin/grid";

@Component({ name: "e-text-field" })
export default class TextField extends Mixins(Common, Field, GridMixin) {
  @Prop({ type: Boolean, default: false }) outlined!: boolean;
  @Prop({ type: String, default: undefined }) placeholder!: string;
  @Prop({ type: String, default: undefined }) suffix!: string;
  @Prop({ type: String, default: undefined }) prefix!: string;
  @Prop({ type: String, default: "start" }) inputAlign!: string;
  @Prop({ type: Boolean, default: false }) clearable!: boolean;
  @Prop({ type: String, default: "text" }) type!: string;
  @Prop({ type: String, default: null }) appendIcon!: boolean;
  localValue = "";
  availableRootClasses = {
    disabled: "e-field--is-disabled",
    readonly: "e-field--is-readonly",
    hasError: "e-field--has-error",
    outlined: "e-field--outlined",
    focused: "e-field--is-focused",
    inputsOutlined: "e-field--outlined",
    labelInline: "e-field--label-inline",
    hovered: "e-field--is-hovered",
    dense: "e-field--dense",
  };

  @Watch("model")
  handler(): void {
    this.dirty = true;
  }

  clear(): void {
    this.model = "";
  }

  get componentClass(): string {
    return this.rootClass(`e-field e-text-field ${this.textColorClass}`, {
      ...this.availableRootClasses,
      ...this.gridClass,
    });
  }
  get iconClearClass(): string | boolean {
    const icon = getComputedStyle(document.body).getPropertyValue(
      "--icon-close"
    );
    return icon.length > 3 ? `${icon} e-icon` : false;
  }
  get showClearable(): boolean {
    return this.clearable && `${this.model}`.length > 0;
  }

  handleBlur(evt: InputEvent): void {
    this.focused = false;
    this.dirty = true;
    this.$emit("blur", evt);
  }

  get inputStyle(): Record<string, string> {
    return { textAlign: this.inputAlign };
  }

  handleInput(evt: InputEvent): void {
    this.model = (evt.target as any).value;
  }

  handleFocus(evt: InputEvent): void {
    this.focused = true;
    this.$emit("focus", evt);
  }

  setInputFocus(): void {
    this.focused = true;
    (this.$refs.input as HTMLElement).focus();
    this.$emit("focus");
  }
}
</script>
<style lang="scss">
@import "./text-field.scss";
</style>
