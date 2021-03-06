<template>
  <form :class="rootClass('e-form')" @submit="$emit('submit')">
    <slot></slot>
  </form>
</template>

<script lang="ts">
import { Component, Mixins, Prop, Vue, Watch } from "vue-property-decorator";
import Field from "@/mixin/field";
import Common from "@/mixin/common";
@Component
export default class EForm extends Mixins(Common) {
  @Prop({ type: Boolean, default: false }) value!: boolean;
  @Prop({ type: Boolean, default: true }) lazy!: boolean;
  @Prop({ type: Boolean, default: true }) grid!: boolean;
  @Prop({ type: [String], default: "unset" }) LabelMinWidth!: string;
  @Prop({ type: Boolean, default: false }) inputsHoverState!: boolean;
  @Prop({ type: Boolean, default: true }) inputsOutlined!: boolean;
  @Prop({ type: Boolean, default: false }) inputsFocusState!: boolean;
  localValue = true;

  fieldsChild: Array<boolean> = [];
  fieldsNames: Array<string> = [
    "e-text-field",
    "e-checkbox",
    "e-radio-group",
    "e-select",
  ];
  availableRootClasses = {
    grid: "e-form--grid",
  };
  unwatch: Array<() => void> = [];

  @Watch("fieldsChild", { immediate: true, deep: true })
  onFieldsChildChanged(val: Array<boolean>): void {
    this.model = !val.find((e) => e);
  }

  get model(): boolean {
    return this.value !== null ? this.value : this.localValue;
  }
  set model(val: boolean) {
    this.$emit("input", val);
    this.localValue = val;
  }
  mounted(): void {
    this.validate(true);
  }
  destroy(): void {
    this.unwatch.forEach((unwatch) => unwatch());
  }

  reset(): void {
    const testList: Array<Field> = this.recursive(this, []);
    testList.forEach((vueComponent: Field) => {
      vueComponent.dirty = false;
    });
  }
  validate(ignoreFieldDirty: boolean): boolean {
    const testList: Array<Field> = this.recursive(this, []);
    this.fieldsChild = new Array(testList.length).fill(false);
    testList.forEach((vueComponent: Field, index) => {
      vueComponent.inputsHoverState = this.inputsHoverState;
      vueComponent.inputsFocusState = this.inputsFocusState;
      vueComponent.inputsLabelMinWidth = this.LabelMinWidth;
      vueComponent.inputsOutlined = this.grid || this.inputsOutlined;
      vueComponent.inputsDetailsOnMessageOnly = this.grid;
      if (!this.lazy || !ignoreFieldDirty) vueComponent.dirty = true;

      this.fieldsChild.splice(index, 1, vueComponent.hasError);
      const unwatch = this.$watch(
        () => vueComponent.hasError,
        (val) => {
          this.fieldsChild.splice(index, 1, val);
        }
      );
      this.unwatch.push(unwatch);
    });
    return (
      (this.$el.querySelectorAll(".e-field--has-error") || []).length === 0
    );
  }
  recursive(vueComponent: Vue, list: Array<Field>): Array<Field> {
    if (this.fieldsNames.find((e) => e === vueComponent.$options.name)) {
      return list.concat(vueComponent as Field);
    } else if (vueComponent.$children.length > 0) {
      let sublist: Array<Field> = [];
      vueComponent.$children.forEach((child) => {
        sublist = sublist.concat(this.recursive(child, []));
      });
      return sublist;
    } else {
      return list;
    }
  }
}
</script>
<style lang="scss">
@import "./form.scss";
</style>
