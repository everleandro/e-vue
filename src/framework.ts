import { VueConstructor } from "vue";
import { install } from "@/install";
export default class EVue {
  static installed: boolean;
  static version: string;
  static install: (Vue: VueConstructor, args?: never) => void;
  constructor() {
    EVue.installed = true;
  }
  init(root: never, ssrContext: never): void {
    console.log("[root]", root);
    console.log("ssrContext", ssrContext);
  }
}
EVue.install = install;
EVue.version = "0.1.73";
