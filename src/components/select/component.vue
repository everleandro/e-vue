<template>
  <div :class="rootClass('e-field e-select ' + textColorClass)">
    <div class="e-field__control">
      <div
        role="button"
        aria-haspopup="listbox"
        aria-expanded="false"
        aria-owns="list-1010"
        class="e-field__slot"
      >
        <div class="e-select__slot" @click="handleSelectSlotCLick">
          <label for="input-1010" class="e-label"> Standard</label>
          <div class="e-select__selections">
            <div class="e-select__selection">{{ model }}</div>
            <input
              :id="id"
              readonly="readonly"
              type="text"
              aria-readonly="false"
              autocomplete="off"
              aria-activedescendant="list-item-1177-1"
            />
          </div>
          <div class="e-field__append-inner">
            <div class="e-field__icon e-field__icon--append">
              <span aria-hidden="true" class="e-icon e-icon--size-x-large">
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
        <div class="e-menu">
          <transition name="fade">
            <div
              v-if="opened"
              v-click-outside="handleOutsideMenu"
              class="e-menu__content"
            >
              <e-list>
                <e-list-group v-model="model">
                  <e-list-item
                    v-for="(item, index) in items"
                    :key="index"
                    :value="item"
                  >
                    {{ item }}
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
export default class TextField extends Mixins(Common, Field) {
  @Prop({ type: Boolean, default: false }) outlined!: boolean;
  @Prop({ type: String, default: "text" }) type!: string;
  @Prop({ type: Array, default: () => [] }) items!: Array<
    string | number | Record<any, any>
  >;

  localValue = "";
  focused = false;
  opened = false;

  @Watch("opened")
  onOpenedChange(value: boolean) {
    this.focused = value;
  }

  @Watch("model")
  onModelChange() {
    this.opened = false;
  }

  availableRootClasses = {
    disabled: "e-field--is-disabled",
    readonly: "e-field--is-readonly",
    hasError: "e-field--has-error",
    outlined: "e-select--outlined",
    focused: "e-select--is-focused",
    opened: "e-select--is-open",
  };
  handleOutsideMenu() {
    if (this.opened) {
      this.opened = false;
      this.dirty = true;
    }
  }
  handleSelectSlotCLick() {
    this.opened = !this.opened;
  }
}
</script>
<style lang="scss">
@import "./style.scss";
</style>
