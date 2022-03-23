import { DirectiveOptions } from "vue";

const clickOutside: DirectiveOptions = {
  bind: function (el: any, binding) {
    if (typeof binding.value !== "function") {
      console.warn(
        `[Vue-click-outside:] provided expression '${binding.expression}' is not a function, but has to be`
      );
    }
    // Define Handler and cache it on the element
    const bubble = binding.modifiers.bubble;
    const handler = (e: any) => {
      if (bubble || (!el.contains(e.target) && el !== e.target)) {
        binding.value(e);
      }
    };
    el.__vueClickOutside__ = handler;
    // add Event Listeners
    document.addEventListener("mousedown", handler);
  },
  unbind: function (el: any) {
    // Remove Event Listeners
    document.removeEventListener("mousedown", el.__vueClickOutside__);
    el.__vueClickOutside__ = null;
  },
};

export default clickOutside;
