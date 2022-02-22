# e-vue

ui-library with frequently used components, adaptable to your needs. You can use each of the proposed components or just use the one you need

## Installation

```bash
npm install @ever.leandros91/e-vue
```

Custom styling

```bash
import "@ever.leandros91/e-vue/dist/e-vue.css";
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

# Demo

You can see all components documented here [Online demo](https://61ae7d6549f6bb003ab4b803-kvbfebidpl.chromatic.com/?path=/story/components-button-usage--usage).

## Examples

#### Grid

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
