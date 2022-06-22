export * from "@/components";
export * from "@/directives";
import { default as EVue } from "@/framework";

declare global {
  interface Window {
    EVue: never;
  }
}
if (window) {
  window.EVue = window.EVue || EVue;
}
export default EVue;
