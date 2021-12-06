import { DirectiveOptions } from "vue";

const ripple: DirectiveOptions = {
  bind: function (el, binding) {
    el.classList.add("v-ripple-element");
    if (!(binding?.value?.disabled === true))
      el.addEventListener("mousedown", function (e) {
        const circle = document.createElement("span");
        el.appendChild(circle);
        const DOMRect = el.getBoundingClientRect();
        const diameter = Math.max(DOMRect.width, DOMRect.height);
        const radius = diameter / 2;
        const { color } = getComputedStyle(el);
        const background = color || "rgb(255, 255, 255)";
        circle.style.width = circle.style.height = diameter + "px";
        circle.style.animationDuration = "0.5s";
        circle.style.backgroundColor = background;

        const center = !!binding?.value?.center;

        circle.style.left = center
          ? "0px"
          : e.clientX - (DOMRect.left + radius) + "px";

        circle.style.top = center
          ? "0px"
          : e.clientY - (DOMRect.top + radius) + "px";

        circle.classList.add("v-ripple");
        setTimeout(() => {
          if (circle) el.removeChild(circle);
        }, 500);
      });
  },
};

export default ripple;
