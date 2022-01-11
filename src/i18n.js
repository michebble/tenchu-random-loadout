import {
  _,
  getLocaleFromNavigator,
  register,
  init,
} from "svelte-i18n";

register("en", () => import("./locales/en.json"));
register("jp", () => import("./locales/jp.json"));

init({
  fallbackLocale: "en",
  initialLocale: getLocaleFromNavigator()
});
