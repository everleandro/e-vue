<template>
    <div :class="rootClass('col', colClass)">
        <slot name="default"></slot>
    </div>
</template>

<script lang="ts">
    import Common from "@/mixin/common";
    import {Component, Prop, Mixins} from "vue-property-decorator";

    @Component
    export default class ECol extends Mixins(Common) {
        @Prop({type: Boolean, default: false}) noGutters!: boolean;
        @Prop({type: [String, Number], default: null}) col!: number | string;
        @Prop({type: [String, Number], default: null}) sm!: number | string;
        @Prop({type: [String, Number], default: null}) md!: number | string;
        @Prop({type: [String, Number], default: null}) lg!: number | string;

        get colClass(): Record<string, string | null> {
            const col = this.col ? `col-${this.col}` : null;
            const sm = this.sm ? `col-sm-${this.sm}` : null;
            const md = this.md ? `col-md-${this.md}` : null;
            const lg = this.lg ? `col-lg-${this.lg}` : null;
            return {col, sm, lg, md};
        }
    }
</script>
