import type { ImageMetadata } from 'astro';
import type { Localized } from '../i18n/utils';
import dart from '../assets/skills/dart.svg';
import fastapi from '../assets/skills/fastapi.svg';
import flutter from '../assets/skills/flutter.svg';
import gemini from '../assets/skills/gemini.svg';
import githubActions from '../assets/skills/github-actions.svg';
import jenkins from '../assets/skills/jenkins.svg';
import jira from '../assets/skills/jira.svg';
import keras from '../assets/skills/keras.svg';
import nuxt from '../assets/skills/nuxt.svg';
import pandas from '../assets/skills/pandas.svg';
import playwright from '../assets/skills/playwright.svg';
import pytest from '../assets/skills/pytest.svg';
import python from '../assets/skills/python.svg';
import sqlite from '../assets/skills/sqlite.svg';
import streamlit from '../assets/skills/streamlit.svg';
import tailwindcss from '../assets/skills/tailwindcss.svg';
import typescript from '../assets/skills/typescript.svg';
import vitest from '../assets/skills/vitest.svg';
import vue from '../assets/skills/vue.svg';

export interface SkillGroup {
  name: Localized;
  items: string[];
}

export interface SkillLogo {
  name: string;
  logo: ImageMetadata;
}

export const skillLogos: SkillLogo[] = [
  { name: 'Python', logo: python },
  { name: 'Keras', logo: keras },
  { name: 'Gemini API', logo: gemini },
  { name: 'FastAPI', logo: fastapi },
  { name: 'Flutter', logo: flutter },
  { name: 'Dart', logo: dart },
  { name: 'TypeScript', logo: typescript },
  { name: 'Vue 3', logo: vue },
  { name: 'Nuxt 3', logo: nuxt },
  { name: 'Tailwind CSS', logo: tailwindcss },
  { name: 'Pandas', logo: pandas },
  { name: 'Streamlit', logo: streamlit },
  { name: 'SQLite', logo: sqlite },
  { name: 'Playwright', logo: playwright },
  { name: 'pytest', logo: pytest },
  { name: 'Vitest', logo: vitest },
  { name: 'GitHub Actions', logo: githubActions },
  { name: 'Jenkins', logo: jenkins },
  { name: 'Jira', logo: jira },
];

export const skillGroups: SkillGroup[] = [
  {
    name: { en: 'Languages', tr: 'Diller' },
    items: ['Python', 'Dart', 'TypeScript'],
  },
  {
    name: { en: 'AI & data', tr: 'Yapay zeka ve veri' },
    items: ['Keras', 'CNN', 'Gemini API', 'Pandas', 'Streamlit'],
  },
  {
    name: { en: 'Backend', tr: 'Backend' },
    items: ['FastAPI', 'SQLModel', 'SQLite', 'APScheduler'],
  },
  {
    name: { en: 'Frontend & mobile', tr: 'Frontend ve mobil' },
    items: ['Flutter', 'Vue 3', 'Nuxt 3', 'Tailwind CSS'],
  },
  {
    name: { en: 'Testing & CI', tr: 'Test ve CI' },
    items: ['Playwright', 'pytest', 'Vitest', 'GitHub Actions', 'Jenkins', 'Jira'],
  },
];
