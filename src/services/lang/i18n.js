import {
  _,
  getLocaleFromNavigator,
  register,
  init,
} from "svelte-i18n";

register("en", () => import("./en.json"));
register("jp", () => import("./jp.json"));

init({
  fallbackLocale: "en",
  initialLocale: getLocaleFromNavigator()
});
