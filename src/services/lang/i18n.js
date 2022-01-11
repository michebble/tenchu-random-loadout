
import {
  dictionary,
  locale,
  _
} from 'svelte-i18n';
import en from './en.json';
function setupI18n({
  withLocale: _locale
} = {
    withLocale: 'en'
  }) {
  dictionary.set({
    en: en,
  });
  locale.set(_locale);
}
export {
  _,
  setupI18n
};