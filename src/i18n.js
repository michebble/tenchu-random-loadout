import {
  _,
  getLocaleFromNavigator,
  register,
  init,
} from "svelte-i18n";

register("en", () => import("./locales/en.json"));
register("ja", () => import("./locales/ja.json"));

const previousLocal = localStorage.getItem('locale')
const simplifiedNavigatorLocale = () => {
  const simpleLocale = getLocaleFromNavigator().substring(0, 2)
  return ["ja", "en"].includes(simpleLocale) ? simpleLocale : "en"
}
init({
  fallbackLocale: "en",
  initialLocale: previousLocal || simplifiedNavigatorLocale()
});
