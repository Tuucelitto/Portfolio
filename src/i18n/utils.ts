import { getRelativeLocaleUrl } from 'astro:i18n';
import { defaultLang, languages, ui, type Lang, type UiKey } from './ui';

export type Localized = Record<Lang, string>;

export function resolveLang(locale: string | undefined): Lang {
  return locale && locale in languages ? (locale as Lang) : defaultLang;
}

export function useTranslations(lang: Lang) {
  return (key: UiKey) => ui[lang][key];
}

// Maps the current path to the same page in another language,
// e.g. "/tr/" -> "/" and "/" -> "/tr/".
export function getLocalizedPath(pathname: string, target: Lang) {
  const segments = pathname.split('/').filter(Boolean);
  const pathWithoutLang = segments[0] && segments[0] in languages ? segments.slice(1) : segments;
  return getRelativeLocaleUrl(target, pathWithoutLang.join('/'));
}
