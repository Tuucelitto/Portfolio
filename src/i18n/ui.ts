export const languages = { en: 'English', tr: 'Türkçe' } as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'en';

const en = {
  'meta.title': 'Betül Tuğçe Uygur — Computer Engineer, AI & ML',
  'meta.description':
    'Portfolio of Betül Tuğçe Uygur, a computer engineer based in Ankara focused on AI and machine learning: deep learning models, full-stack apps and mobile projects.',

  'a11y.skip': 'Skip to content',
  'a11y.nav': 'Main navigation',
  'a11y.langSwitch': 'Türkçe sürüme geç',
  'a11y.langSwitchShort': 'TR',

  'nav.projects': 'projects',
  'nav.experience': 'experience',
  'nav.skills': 'skills',
  'nav.contact': 'contact',

  'hero.greeting': "Hi, I'm",
  'hero.role': 'Computer engineer growing into AI and machine learning.',
  'hero.summary':
    'I build across the stack, from CNN models and LLM pipelines to APIs and mobile apps, and I care about understanding how each piece works.',
  'hero.meta': 'Ankara, Türkiye · Mersin University',
  'hero.ctaProjects': 'View projects',
  'hero.ctaContact': 'Get in touch',

  'projects.title': 'Selected projects',
  'projects.label': '~/projects',
  'projects.source': 'Source code',
  'projects.sourceOf': 'Source code of',
  'projects.demo': 'Live demo',
  'projects.demoOf': 'Live demo of',

  'experience.title': 'Experience',
  'experience.label': '~/experience',

  'skills.title': 'Skills',
  'skills.label': '~/skills',
  'skills.marqueeLabel': 'Technologies I work with',

  'contact.title': "Let's talk",
  'contact.label': '~/contact',
  'contact.text':
    "I'm looking for opportunities in software and AI. The fastest way to reach me is by email.",
  'contact.copy': 'Copy',
  'contact.copied': 'Copied!',
  'contact.copyFailed': 'Copy failed',
  'contact.copyLabel': 'Copy email address',
  'contact.noJs': 'Message me on LinkedIn',

  'footer.location': 'Ankara, Türkiye',
};

const tr: Record<keyof typeof en, string> = {
  'meta.title': 'Betül Tuğçe Uygur — Bilgisayar Mühendisi, Yapay Zeka ve ML',
  'meta.description':
    "Ankara'da yaşayan, yapay zeka ve makine öğrenmesine odaklanan bilgisayar mühendisi Betül Tuğçe Uygur'un portfolyosu: derin öğrenme modelleri, tam yığın uygulamalar ve mobil projeler.",

  'a11y.skip': 'İçeriğe geç',
  'a11y.nav': 'Ana menü',
  'a11y.langSwitch': 'Switch to English',
  'a11y.langSwitchShort': 'EN',

  'nav.projects': 'projeler',
  'nav.experience': 'deneyim',
  'nav.skills': 'yetenekler',
  'nav.contact': 'iletişim',

  'hero.greeting': 'Merhaba, ben',
  'hero.role': 'Yapay zeka ve makine öğrenmesi alanında kendini geliştiren bilgisayar mühendisi.',
  'hero.summary':
    'CNN modellerinden LLM iş akışlarına, API\'lerden mobil uygulamalara kadar uçtan uca geliştiriyorum ve her parçanın nasıl çalıştığını anlamaya önem veriyorum.',
  'hero.meta': 'Ankara, Türkiye · Mersin Üniversitesi',
  'hero.ctaProjects': 'Projeleri gör',
  'hero.ctaContact': 'İletişime geç',

  'projects.title': 'Öne çıkan projeler',
  'projects.label': '~/projeler',
  'projects.source': 'Kaynak kod',
  'projects.sourceOf': 'Kaynak kodu:',
  'projects.demo': 'Canlı demo',
  'projects.demoOf': 'Canlı demo:',

  'experience.title': 'Deneyim',
  'experience.label': '~/deneyim',

  'skills.title': 'Yetenekler',
  'skills.label': '~/yetenekler',
  'skills.marqueeLabel': 'Kullandığım teknolojiler',

  'contact.title': 'Konuşalım',
  'contact.label': '~/iletisim',
  'contact.text':
    'Yazılım ve yapay zeka alanında fırsatlar arıyorum. Bana en hızlı e-postayla ulaşabilirsin.',
  'contact.copy': 'Kopyala',
  'contact.copied': 'Kopyalandı!',
  'contact.copyFailed': 'Kopyalanamadı',
  'contact.copyLabel': 'E-posta adresini kopyala',
  'contact.noJs': "LinkedIn'den mesaj gönder",

  'footer.location': 'Ankara, Türkiye',
};

export const ui = { en, tr };

export type UiKey = keyof typeof en;
