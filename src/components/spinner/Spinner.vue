<template>
  <div class="v-spinner" :class="cssClass">
    <div v-if="ripple" class="v-spinner__ripple">
      <div></div>
      <div></div>
    </div>
    <div class="v-spinner__ellipsis">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>
