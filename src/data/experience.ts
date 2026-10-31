import type { Localized } from '../i18n/utils';

export interface Experience {
  role: Localized;
  company: string;
  period: Localized;
  description: Localized;
}

export const experience: Experience[] = [
  {
    role: { en: 'Software QA Intern', tr: 'Software QA Stajyeri' },
    company: 'Gensure Tech',
    period: { en: 'Jul – Aug 2025', tr: 'Temmuz – Ağustos 2025' },
    description: {
      en: 'Managed manual testing, test case execution and bug reporting processes with Jira. Built end-to-end test automation with Playwright and TypeScript and contributed to Jenkins workflows. Developed a PDF-JSON data validation tool with Python and a leave management application with Nuxt 3.',
      tr: 'Jira ile manuel test, test senaryosu yürütme ve hata raporlama süreçlerini yönettim. Playwright ve TypeScript ile uçtan uca test otomasyonları geliştirdim, Jenkins süreçlerine katkı sağladım. Python ile PDF-JSON veri doğrulama aracı ve Nuxt 3 tabanlı izin yönetimi uygulaması geliştirdim.',
    },
  },
];
