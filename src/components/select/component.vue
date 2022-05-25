<template>
  <div :class="rootClass('e-field e-select ' + textColorClass)">
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
          <label :for="id" class="e-label" :class="textColorClass" :style="labelStyle">
            {{ label }}
          </label>
          <div class="e-select__selections">
            <div class="e-select__selection">{{ displayedText(model) }}</div>
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
                aria-label="clear icon"
                class="e-icon"
                @click="clear"
              >
                <svg
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
          <div class="e-field__append-inner">
            <div class="e-field__icon e-field__icon--append">
              <span
                aria-hidden="true"
                class="e-icon flip-icon e-icon--size-default"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  role="img"
                  aria-hidden="true"
                  class="e-icon__svg"
                >
                  <path d="M7,10L12,15L17,10H7Z"></path>
                </svg>
              </span>
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
              <e-list :color="color">
                <e-list-group v-model="model">
                  <e-list-item
                    v-for="(item, index) in items"
                    :key="index"
                    :value="item"
                  >
                    {{ displayedText(item) }}
                  </e-list-item>
                </e-list-group>
              </e-list>
            </div>
          </transition>
        </div>
      </div>
      <div v-if="!dense" class="e-field__details">
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
import EList from "@/components/List/List.vue";
import EListGroup from "@/components/List/List-group.vue";
import EListItem from "@/components/List/List-item.vue";
@Component({ name: "e-select", components: { EList, EListGroup, EListItem } })
export default class ESelect extends Mixins(Common, Field) {
  @Prop({ type: Boolean, default: false }) outlined!: boolean;
  @Prop({ type: Boolean, default: false }) clearable!: boolean;
  @Prop({ type: String, default: undefined }) appendIcon!: string;
  @Prop({ type: String, default: "label" }) itemText!: string;
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
    dense: "e-field--dense",
    focused: "e-field--is-focused",
    opened: "e-select--is-open",
    hovered: "e-field--is-hovered",
  };

  displayedText(item: never): string {
    return this.isObject(item) ? item[this.itemText] : item;
  }
  get showClearable(): boolean {
    return this.clearable && !!this.model;
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
