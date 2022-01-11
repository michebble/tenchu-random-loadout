import App from "./App.svelte";
import "./services/lang/i18n"

const app = new App({
  target: document.getElementById("app"),
});

export default app;
