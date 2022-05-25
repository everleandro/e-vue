<template>
  <div :class="rootClass('e-field e-field__slider')">
    <div class="e-field__control">
      <div class="e-field__slot">
        <label
          :for="id"
          class="e-label"
          :class="textColorClass"
          :style="labelStyle"
        >
          {{ label }}
        </label>
        <div
          ref="slider"
          :class="rootClass('e-slider', availableSliderClasses)"
          @click="barClick"
        >
          <input
            :value="model"
            :id="id"
            :disabled="disabled"
            :readonly="readonly"
            tabindex="-1"
          />
          <div ref="sliderBar" class="e-slider__track-container">
            <div
              class="e-slider__track-background"
              :class="rootColor"
              :style="track_background_style"
            ></div>
            <div
              class="e-slider__track-fill"
              :class="colorConfig.trackColor"
              :style="fill_style"
            ></div>
          </div>
          <div
            role="slider"
            tabindex="0"
            aria-label="Slider"
            :aria-valuemin="min"
            :aria-valuemax="max"
            :aria-valuenow="model"
            aria-readonly="false"
            aria-orientation="horizontal"
            class="e-slider__thumb-container"
            :class="{
              'e-slider__thumb-container--focused': focused,
              'e-slider__thumb-container--active': dragging,
              [colorConfig.thumbColor + '--text']: true,
            }"
            :style="sliderStyle"
            @focus="focus"
            @focusout="focusout"
          >
            <div
              class="e-slider__thumb"
              :class="colorConfig.thumbColor"
              @mousedown="dragStart()"
            ></div>
            <div v-if="thumbLabel" class="v-slider__thumb-label-container">
              <div
                class="e-slider__thumb-label"
                :class="colorConfig.thumbColor"
              >
                <div>
                  <span>
                    <slot name="thumb-label">{{ model }}</slot>
                  </span>
                </div>
              </div>
            </div>
          </div>
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
import { Component, Prop, Mixins, Watch } from "vue-property-decorator";
@Component
export default class ESlider extends Mixins(Common, Field) {
  @Prop({ type: [Number, String], default: 100 }) max!: number | string;
  @Prop({ type: [Number, String], default: 0 }) min!: number | string;
  @Prop({ type: Number, default: 10 }) step!: number;
  @Prop({ type: Boolean, default: false }) decimal!: boolean;
  @Prop({ type: Boolean, default: false }) thumbLabel!: boolean;
  @Prop({ type: Boolean, default: false }) vertical!: boolean;
  @Prop({ type: String, default: "" }) trackColor!: string;
  @Prop({ type: String, default: "" }) thumbColor!: string;

  focused = false;
  position = 0;
  dragging = false;
  width = 0;
  localValue = this.min;
  offset = 0;

  availableRootClasses = {
    disabled: "e-field--is-disabled",
  };
  availableSliderClasses = {
    horizontal: " e-slider--horizontal",
    vertical: " e-slider--vertical",
    disabled: "e-slider--disabled",
  };

  get colorConfig(): Record<string, string> {
    return {
      trackColor: this.disabled ? "disabled" : this.trackColor || this.color,
      thumbColor: this.disabled ? "disabled" : this.thumbColor || this.color,
    };
  }

  get sliderBar(): HTMLElement {
    return this.$refs.sliderBar as HTMLElement;
  }
  get slider(): HTMLElement {
    return this.$refs.slider as HTMLElement;
  }
  get horizontal(): boolean {
    return !this.vertical;
  }

  @Watch("value")
  onPropertyChanged(): void {
    this.calculatePosition();
  }

  mounted(): void {
    this.$nextTick(function () {
      if (window) {
        window.addEventListener("resize", this.calculatePosition);
      }
      this.calculatePosition();
    });
  }
  focus(): void {
    this.bindListener();
    this.focused = true;
  }
  get fill_style(): Record<string, string> {
    return {
      left: "0px",
      right: "auto",
      width: `calc(${this.percent()}% - ${this.track_separation()}`,
    };
  }

  get sliderStyle(): Record<string, string> {
    return { left: `${this.percent()}%` };
  }

  get track_background_style(): Record<string, string> {
    return {
      right: "0px",
      width: `calc(${100 - this.percent()}% - ${this.track_separation()})`,
    };
  }
  track_separation(): string {
    return this.disabled ? "10px" : "0px";
  }
  percent(): number {
    return (this.position * 100) / this.width;
  }

  focusout(): void {
    this.focused = false;
    this.unbindListeners();
  }
  destroy(): void {
    this.unbindListeners();
    this.slider.removeEventListener("resize", this.calculatePosition);
  }
  unbindListeners(): void {
    document.removeEventListener("mousemove", this.drag);
    document.removeEventListener("mouseup", this.dragEnd);
  }
  bindListener(): void {
    document.addEventListener("mousemove", this.drag);
    document.addEventListener("mouseup", this.dragEnd);
  }
  drag(evt: Event): void {
    if (!this.dragging || this.disabled) {
      return;
    }

    const pos = this.getPosition(evt as MouseEvent);
    this.setPosition(pos);
  }
  barClick(event: Event): void {
    if (this.disabled) {
      return;
    }
    const pos = this.getPosition(event as MouseEvent);
    this.setPosition(pos);
    this.$nextTick(() => {
      this.calculatePosition();
    });
  }
  dragStart(): void {
    this.dragging = true;
  }
  get calculatedStep(): number {
    return this.width / (parseInt(`${this.max}`) - parseInt(`${this.min}`));
  }
  calculatePosition(): void {
    this.width = this.slider.offsetWidth;
    const min = Math.round(this.model);
    const max = Math.round(this.model);
    const val =
      max >= parseInt(`${this.max}`)
        ? parseInt(`${this.max}`)
        : min <= parseInt(`${this.min}`)
        ? parseInt(`${this.min}`)
        : (this.model as number);
    this.position = this.calculatedStep * val;
  }
  getPosition(evt: MouseEvent): number {
    return evt.clientX - this.offset;
  }
  setPosition(pos: number): void {
    const value = this.calculateValue(pos);
    if (
      pos >= this.min &&
      pos <= this.width &&
      parseInt(`${this.max}`) >= value
    ) {
      this.position = pos;
      if (value !== this.model) {
        this.model = value + parseInt(`${this.min}`);
      }
    }
  }
  calculateValue(pos: number): number {
    this.offset = this.slider.getBoundingClientRect().left;
    const step = this.calculatedStep;
    const result = pos != 0 ? pos / step : 0;
    return this.decimal
      ? Math.round((result + Number.EPSILON) * 10) / 10
      : Math.round(result);
  }
  dragEnd(): void {
    const value = this.calculateValue(this.position);
    const step = this.calculatedStep;
    if (this.min <= value)
      setTimeout(() => {
        this.position = value * step;
      });
    this.dragging = false;
  }
}
</script>
<style lang="scss">
@import "./slider.scss";
</style>
