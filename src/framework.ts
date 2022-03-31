import { VueConstructor } from "vue";
import { install } from "@/install";
export default class EVue {
  static installed: boolean;
  static version: string;
  static install: (Vue: VueConstructor, args?: any) => void;
  constructor() {
    EVue.installed = true;
  }
  init(root: any, ssrContext: any) {
    console.log("root", root);
    console.log("ssrContext", ssrContext);
  }
}
EVue.install = install;
EVue.version = "0.1.63";
