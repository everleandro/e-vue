<template>
  <div :class="rootClass('e-field e-field__slider')">
    <div class="e-field__control">
      <div class="e-field__slot">
        <label :for="id" class="e-label">
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
            :style="slider_tyle"
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
                  <span>{{ model }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="e-messages">
        <div class="e-messages__wrapper"></div>
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
  @Prop({ type: Number, default: 100 }) max!: number;
  @Prop({ type: Number, default: 0 }) min!: number;
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
      this.offset = this.slider.getBoundingClientRect().left;
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

  get slider_tyle(): Record<string, string> {
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
  calculatePosition(): void {
    this.width = this.slider.offsetWidth;
    const step = this.width / this.max;
    const val =
      (this.model as number) > this.max ? this.max : (this.model as number);
    this.position = step * val;
  }
  getPosition(evt: MouseEvent): number {
    return evt.clientX - this.offset;
  }
  setPosition(pos: number): void {
    const value = this.calculateValue(pos);
    if (pos >= 0 && pos <= this.width && this.max >= value) {
      this.position = pos;
      if (value !== this.model) {
        this.model = value + this.min;
      }
    }
  }
  calculateValue(pos: number): number {
    const step = this.width / (this.max - this.min);
    const result = pos != 0 ? pos / step : 0;
    return this.decimal
      ? Math.round((result + Number.EPSILON) * 10) / 10
      : Math.round(result);
  }
  dragEnd(): void {
    const value = this.calculateValue(this.position);
    if (this.min <= value)
      setTimeout(() => {
        this.position = value * (this.width / (this.max - this.min));
      });
    this.dragging = false;
  }
}
</script>
<style lang="scss">
@import "./slider.scss";
</style>
