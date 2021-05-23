import { App } from "@vue/runtime-core";

import defineStore from "./defineStore";
import Account from "./Account";
import Editor from "./Editor";

export const useAccount = defineStore("Account", new Account());
export const useEditor = defineStore("Editor", new Editor());

export default {
	install: (app: App) => app.use(useAccount).use(useEditor),
};
