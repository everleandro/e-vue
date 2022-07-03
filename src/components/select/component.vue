<template>
  <div :class="componentClass">
    <div class="e-field__control">
      <div role="button" aria-expanded="false" class="e-field__slot">
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
          class="e-select__slot"
          @click="handleSelectSlotCLick"
          @mouseenter="handleHover(true)"
          @mouseleave="handleHover(false)"
        >
          <label
            :for="id"
            class="e-label"
            :class="textColorClass"
            :style="labelStyle"
          >
            {{ label }}
          </label>
          <div class="e-select__selections">
            <div class="e-select__selection" :style="selectionStyle">
              {{ selectedText }}
              <span
                v-show="model === undefined || model === null"
                class="e-select__selection-placeholder"
              >
                {{ placeholder }}
              </span>
            </div>
            <input
              :id="id"
              readonly="readonly"
              type="text"
              aria-readonly="false"
              autocomplete="off"
            />
          </div>
          <div v-show="showClearable" class="e-field__append-inner">
            <div
              class="e-field__icon e-field__icon--clear e-icon--size-default"
            >
              <button
                type="button"
                v-ripple
                aria-label="clear icon"
                class="e-btn e-btn--icon e-btn--size-x-small"
                @click="clear"
              >
                <i :class="iconClearClass"></i>
              </button>
            </div>
          </div>
          <div class="e-field__append-inner">
            <div class="e-field__icon e-field__icon--append">
              <i :class="iconFlipClass"></i>
            </div>
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
        <div class="e-menu">
          <transition name="fade">
            <div
              v-if="opened"
              v-click-outside="handleOutsideMenu"
              class="e-menu__content"
            >
              <div :class="['e-list', colorText(color)]">
                <div role="listbox" :class="['e-list-group', colorText(color)]">
                  <div
                    v-ripple
                    v-for="(item, index) in items"
                    :key="index"
                    tabindex="0"
                    role="option"
                    aria-selected="true"
                    :class="{
                      'v-ripple-element': true,
                      'e-list-item': true,
                      'e-list-item--active': active(item),
                    }"
                    @click="handleItemClick(item)"
                  >
                    <div class="e-list-item__content">
                      <slot name="item">
                        {{ displayedText(item) }}
                      </slot>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </transition>
        </div>
      </div>
      <transition name="scale">
        <div v-if="showDetails" class="e-field__details">
          <div class="e-messages" role="alert">
            <div class="e-messages__wrapper" :class="textColorClass">
              {{ details }}
            </div>
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

@Component({ name: "e-select" })
export default class ESelect extends Mixins(Common, Field, GridMixin) {
  @Prop({ type: Boolean, default: false }) outlined!: boolean;
  @Prop({ type: String, default: "center" }) alignSelection!: string;
  @Prop({ type: String, default: "" }) placeholder!: string;
  @Prop({ type: Boolean, default: false }) clearable!: boolean;
  @Prop({ type: Boolean, default: false }) returnObject!: boolean;
  @Prop({ type: String, default: undefined }) appendIcon!: string;
  @Prop({ type: String, default: "label" }) itemText!: string;
  @Prop({ type: String, default: "value" }) itemValue!: string;
  @Prop({ type: Array, default: () => [] }) items!: Array<
    string | number | Record<never, never>
  >;

  localValue = "";
  focused = false;
  opened = false;

  @Watch("opened")
  onOpenedChange(value: boolean): void {
    this.focused = value;
  }

  @Watch("model")
  onModelChange(): void {
    this.opened = false;
  }

  availableRootClasses = {
    disabled: "e-field--is-disabled",
    readonly: "e-field--is-readonly",
    hasError: "e-field--has-error",
    outlined: "e-field--outlined",
    inputsOutlined: "e-field--outlined",
    dense: "e-field--dense",
    focused: "e-field--is-focused",
    opened: "e-select--is-open",
    labelInline: "e-field--label-inline",
    hovered: "e-field--is-hovered",
  };

  get componentClass(): string {
    return this.rootClass(`e-field e-select ${this.textColorClass}`, {
      ...this.availableRootClasses,
      ...this.gridClass,
    });
  }

  displayedText(item: never): string {
    return this.isObject(item) ? item[this.itemText] : item;
  }

  handleItemClick(item: never): void {
    if (this.returnObject) {
      this.model = item;
    } else {
      this.model = item[this.itemValue];
    }
  }
  active(item: never): boolean {
    if (!this.isObject(item)) {
      return item === this.value;
    } else if (this.returnObject) {
      return JSON.stringify(item) === JSON.stringify(this.value);
    } else {
      return item[this.itemValue] === this.value;
    }
  }

  get selectedText(): string {
    if (this.value === null || this.value === undefined) {
      return "";
    }
    if (!this.isObject((this.items?.[0] as never) || {})) {
      return `${this.value}`;
    } else if (this.returnObject) {
      const item = this.items.find(
        (e) =>
          (e as Record<string, string>)[this.itemValue] ===
          this.value[this.itemValue]
      ) as Record<string, string>;
      return item[this.itemText];
    } else {
      const item = this.items.find(
        (e) => (e as Record<string, string>)[this.itemValue] === this.value
      ) as Record<string, string>;
      return item?.[this.itemText];
    }
  }

  get iconFlipClass(): string {
    const icon =
      getComputedStyle(document.body).getPropertyValue(
        "--icon-action-select"
      ) || "mdi mdi-chevron-down";
    return `${icon} e-icon flip-icon e-icon--size-default`;
  }

  get iconClearClass(): string {
    const icon =
      getComputedStyle(document.body).getPropertyValue("--icon-close") ||
      "mdi mdi-close";
    return `${icon} e-icon`;
  }

  get showClearable(): boolean {
    return this.clearable && !!this.model;
  }

  get selectionStyle(): Record<string, string> {
    return { textAlign: this.alignSelection };
  }

  clear(): void {
    this.model = null;
  }

  handleOutsideMenu(): void {
    if (this.opened) {
      this.opened = false;
      this.dirty = true;
    }
  }

  handleSelectSlotCLick(): void {
    this.opened = !this.opened;
  }
}
</script>
<style lang="scss">
@import "./style.scss";
</style>
