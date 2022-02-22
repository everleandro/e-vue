# e-vue

ui-library with frequently used components, adaptable to your needs. You can use each of the proposed components or just use the one you need

# Demo

You can see all components documented here [Online demo](https://61ae7d6549f6bb003ab4b803-kvbfebidpl.chromatic.com/?path=/story/components-button-usage--usage).

## Installation

```bash

npm install @ever.leandros91/e-vue

```

```js
import {
  EButton,
  EForm,
  ECheckbox,
  ERadio,
  RadioGroup,
  ESlider,
  ETextField,
  ERow,
  ECol,
} from "@ever.leandros91/e-vue";
```

# Setting

```bash
// src/main.ts

import "@ever.leandros91/e-vue/dist/e-vue.css";

```

```bash

// vue.config.js

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
        // This is the path to your variables
        @import "@/sass/variables.scss";
        // This is mandatory
        @import "@ever.leandros91/e-vue/styles/override.scss";
        `,
      },
    },
  },
};

```

Example variable file

```scss
// src/sass/variables.scss

// Globals
$border-radius-root: 4px;
$root-font-size: 2rem;

// Colors
$colors: (
  "primary": #f19933,
  "secondary": #2c373c,
  "white": white,
  "black": black,
  "disabled": rgba(0, 0, 0, 0.38),
  "success": #66bb6a,
  "red": #f44336,
  "error": #f44336,
);
```

# SASS variables

### General

```scss
$root-font-size: 1rem !default;
$border-radius-root: 1px !default;
$space-base: 12px !default;
```

### e-button

```scss
$btn-border-radius: $border-radius-root !default;
$btn-font-weight: 500 !default;
$btn-letter-spacing: 0.0892857143em !default;
$btn-border-width: 2px !default;
$btn-rounded-border-radius: 28px !default;
$btn-text-transform: uppercase !default;
$btn-transition-duration: 0.28s !default;

$btn-states: (
  "focus": 0.05,
  "hover": 0.1,
  "active": 0.3,
) !default;

$btn-font-sizes: (
  "x-small": 0.625rem,
  "small": 0.75rem,
  "default": 0.875rem,
  "large": 0.875rem,
  "x-large": 1rem,
) !default;

$fab-font-sizes: (
  "x-small": 18px,
  "small": 20px,
  "default": 24px,
  "large": 28px,
  "x-large": 32px,
) !default;

$fab-height: (
  "x-small": 32px,
  "small": 40px,
  "default": 56px,
  "large": 64px,
  "x-large": 72px,
) !default;

$btn-height: (
  "x-small": 35px,
  "small": 40px,
  "default": 45px,
  "large": 45px,
  "x-large": 50px,
) !default;
```

### Grid

```scss
$grid-cols: 24 !default;
$breakpoint: (
  "xs": 600px,
  "sm": 960px,
  "md": 1264px,
  "lg": 1904px,
) !default;
```

### Colors

each of the colors defined in this file can be passed as prop="color" of the components declared in the library they also generate helper classes.

##### Variables

```scss
$colors: (
  "primary": #f19933,
  "secondary": #2c373c,
  "white": white,
  "black": black,
  "disabled": rgba(0, 0, 0, 0.38),
  "success": #66bb6a,
  "red": #f44336,
  "error": #f44336,
) !default;

$contrast-colors: (
  "white": black,
) !default;
```

##### Generated classes

```scss
.primary {
  background-color: #f19933;
  &--text {
    color: #f19933;
  }
}
.secondary {
  background-color: #2c373c;
  &--text {
    color: #2c373c;
  }
}
// ...
```

## Grid Examples

Grid system comes with a 24 point built using flexbox

```html
<!-- simple -->
<e-row>
  <e-col>column</e-col>
</e-row>

<!-- with breakpoints -->
<e-row>
  <e-col xs="12" sm="24" md="6" lg="18" xl="8">
    diferent number of columns in diferents breakpoints
  </e-col>
</e-row>
```
