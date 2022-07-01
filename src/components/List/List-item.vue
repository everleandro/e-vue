<template>
  <div
    :is="tag"
    v-ripple
    tabindex="0"
    role="option"
    v-bind="attrs"
    aria-selected="true"
    :class="rootClass('e-list-item v-ripple-element')"
    @click="handleItemClick"
  >
    <div v-if="hasPrependSlot" class="e-list-item__icon">
      <slot name="prepend-icon"></slot>
    </div>
    <div v-else-if="prependIcon" class="e-list-item__icon">
      <e-icon>{{ prependIcon }}</e-icon>
    </div>
    <div class="e-list-item__content">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import Common from "@/mixin/common";
import { Component, Prop, Mixins } from "vue-property-decorator";
import EListGroup from "@/components/List/List-group.vue";
import EIcon from "@/components/icon/Icon.vue";

@Component({
  name: "e-list-item",
  components: {
    EIcon,
  },
})
export default class EListItem extends Mixins(Common) {
  @Prop({ type: Boolean, default: false }) disabled!: boolean;
  @Prop({ type: Boolean, default: true }) ripple!: boolean;
  @Prop({ type: String, default: undefined }) prependIcon!: string;
  @Prop({ type: String, default: "e-list-item--active" }) activeClass!: string;
  @Prop({ default: undefined }) value!: never;

  availableRootClasses = {
    disabled: "e-list-item--disabled",
    active: "e-list-item--active",
    link: "e-list-item--link",
  };

  get active(): boolean {
    if (this.isIntoItemGroup) {
      const valueIsObject = typeof this.value === "object";
      const parentValue = (this.$parent as EListGroup).model;
      const parentItemValue = (this.$parent as EListGroup).itemValue;
      // const parentValueIsObject = typeof parentValue === "object";
      if (valueIsObject && parentValue) {
        let condition;
        if (!parentItemValue)
          condition =
            JSON.stringify(this.value) === JSON.stringify(parentValue);
        else condition = this.value[parentItemValue] === parentValue;
        return condition;
      } else {
        return parentValue === this.value;
      }
    }
    return false;
  }
  get hasPrependSlot(): boolean {
    return !!this.$slots["prepend-icon"];
  }
  get isIntoItemGroup(): boolean {
    return this.$parent.$options.name === "e-list-group";
  }
  get tag(): string {
    return this.$attrs.to ? "router-link" : "div";
  }
  get attrs(): Record<string, string> {
    const result: Record<string, string> = { ...this.$attrs };
    if (this.tag === "router-link") {
      result.activeClass = this.activeClass;
    }
    return result;
  }
  handleItemClick(): void {
    const itemValue = (this.$parent as EListGroup).itemValue;
    const val = itemValue ? this.value[itemValue] : this.value;
    if (this.isIntoItemGroup && this.value !== undefined) {
      (this.$parent as EListGroup).model = val;
    }
    this.$emit("click:item", val);
  }
  get link(): boolean {
    return !!this.$attrs.to || this.value !== undefined;
  }
}
</script>
<style lang="scss"></style>
