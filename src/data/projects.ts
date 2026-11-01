import type { ImageMetadata } from 'astro';
import type { Localized } from '../i18n/utils';
import aiNewsHome from '../assets/projects/ai-news-home-dark.jpg';
import mevzuatAsistani from '../assets/projects/mevzuat-asistani.jpg';

export interface Project {
  slug: string;
  title: Localized;
  tag?: Localized;
  summary: Localized;
  highlights: Localized[];
  metrics?: { value: string; label: Localized }[];
  tech: string[];
  github: string;
  demo?: string;
  image?: { src: ImageMetadata; alt: Localized };
}

export const projects: Project[] = [
  {
    slug: 'ai-news',
    title: { en: 'AI News', tr: 'AI News' },
    tag: { en: 'Full-stack project', tr: 'Full-stack proje' },
    summary: {
      en: 'A self-hosted news reader that collects AI news from RSS feeds every hour, extracts the full article text and summarizes it in Turkish with the Gemini API.',
      tr: 'Yapay zeka haberlerini RSS kaynaklarından saatlik toplayan, makalelerin tam metnini çıkaran ve Gemini API ile Türkçe özetleyen, kendi sunucusunda çalışan haber okuyucu.',
    },
    highlights: [
      {
        en: 'Quota-aware summary queue backed by the database: rate limits, backoff, crash recovery and model fallback',
        tr: 'Veritabanını kuyruk olarak kullanan, kotaya duyarlı özet kuyruğu: hız limitleri, backoff, çökme sonrası devam ve yedek modele geçiş',
      },
      {
        en: 'Batched Gemini requests and Turkish-aware search',
        tr: 'Toplu Gemini istekleri ve Türkçe karakterlere duyarlı arama',
      },
      {
        en: 'Vue interface with filters, favorites, light and dark themes, and a protected status panel',
        tr: 'Filtreler, favoriler, açık/koyu tema ve korumalı durum paneli içeren Vue arayüzü',
      },
      {
        en: 'pytest and Vitest suites running on GitHub Actions CI',
        tr: 'GitHub Actions CI üzerinde çalışan pytest ve Vitest testleri',
      },
    ],
    tech: [
      'Python',
      'FastAPI',
      'SQLModel',
      'SQLite',
      'APScheduler',
      'Gemini API',
      'Vue 3',
      'TypeScript',
      'Tailwind CSS',
    ],
    github: 'https://github.com/Tuucelitto/AI-News',
    image: {
      src: aiNewsHome,
      alt: {
        en: 'AI News home page in dark theme, showing a headline story and a grid of news summaries in Turkish',
        tr: 'Koyu temalı AI News ana sayfası: öne çıkan haber ve Türkçe haber özetlerinden oluşan ızgara',
      },
    },
  },
  {
    slug: 'mevzuat-asistani',
    title: { en: 'Mevzuat Asistanı', tr: 'Mevzuat Asistanı' },
    tag: { en: 'Measured RAG system', tr: 'Ölçülen RAG sistemi' },
    summary: {
      en: 'A RAG system that answers Turkish labour-law questions with article citations and refuses when the law text has no answer. Results come from a held-out test set of 47 questions.',
      tr: 'Türk iş mevzuatı sorularını madde numarasıyla cevaplayan, metinde cevap yoksa bilmiyorum diyen RAG sistemi. Sonuçlar 47 soruluk ayrı bir test setinden geliyor.',
    },
    highlights: [
      {
        en: 'No wrong information in hand-graded answers; graded against the law text, not by a lawyer',
        tr: 'Elle puanlanan cevaplarda yanlış bilgi yok; puanlama kanun metnine göre yapıldı, hukukçu tarafından değil',
      },
      {
        en: 'Weakest area: only 2 of 11 everyday-language questions were answered completely',
        tr: 'En zayıf alan: gündelik dille sorulan 11 sorunun yalnızca 2’si tam cevaplandı',
      },
      {
        en: 'Compared dense, BM25 and hybrid search with recorded numbers',
        tr: 'Vektör, BM25 ve hibrit arama sayılarla karşılaştırıldı',
      },
    ],
    metrics: [
      { value: '24/35', label: { en: 'complete answers', tr: 'tam cevap' } },
      { value: '12/12', label: { en: 'correct refusals', tr: 'doğru bilmiyorum' } },
    ],
    tech: ['Python', 'FastAPI', 'Gemini API', 'Qdrant', 'Vue 3', 'TypeScript', 'pytest'],
    github: 'https://github.com/Tuucelitto/mevzuat-rag',
    demo: 'https://mevzuat-asistani.netlify.app',
    image: {
      src: mevzuatAsistani,
      alt: {
        en: 'Mevzuat Asistanı answering a question about unused annual leave and citing Article 59 of Law No. 4857',
        tr: 'Mevzuat Asistanı, kullanılmayan yıllık izinle ilgili soruya 4857 sayılı Kanunun 59. maddesini göstererek cevap veriyor',
      },
    },
  },
  {
    slug: 'fingerprint-prediction',
    title: {
      en: 'Gender and Blood Group Prediction from Fingerprints',
      tr: 'Parmak İzinden Cinsiyet ve Kan Grubu Tahmini',
    },
    tag: { en: 'Graduation project', tr: 'Bitirme projesi' },
    summary: {
      en: 'Two CNN models served through a Streamlit interface. Dropout, data augmentation and early stopping were used to solve overfitting.',
      tr: 'Streamlit arayüzüyle sunulan iki CNN modeli. Overfitting; dropout, veri artırma ve early stopping ile çözüldü.',
    },
    highlights: [],
    metrics: [
      { value: '~85.1%', label: { en: '8-class blood group', tr: '8 sınıflı kan grubu' } },
      { value: '~77.5%', label: { en: 'gender (SOCOFing)', tr: 'cinsiyet (SOCOFing)' } },
    ],
    tech: ['Python', 'Keras', 'CNN', 'Streamlit'],
    github: 'https://github.com/Tuucelitto/ParmakIziProjesi',
  },
  {
    slug: 'nutrition-fitness-app',
    title: {
      en: 'Personalized Nutrition & Fitness App',
      tr: 'Kişiselleştirilmiş Beslenme ve Fitness Uygulaması',
    },
    summary: {
      en: 'A Flutter mobile app with a FastAPI and Pandas backend that turns BMI, BMR and TDEE into goal-based calorie and macro targets.',
      tr: 'BMI, BMR ve TDEE değerlerini hedefe göre kalori ve makro planına dönüştüren, FastAPI ve Pandas altyapılı Flutter mobil uygulama.',
    },
    highlights: [
      {
        en: 'Vegetarian and vegan recipe filtering',
        tr: 'Vejetaryen ve vegan tarif filtreleme',
      },
      {
        en: 'Exercise suggestions and a 7-day plan',
        tr: 'Egzersiz önerileri ve 7 günlük plan',
      },
    ],
    tech: ['Flutter', 'Dart', 'FastAPI', 'Pandas'],
    github: 'https://github.com/Tuucelitto/personal_health_app',
  },
];
