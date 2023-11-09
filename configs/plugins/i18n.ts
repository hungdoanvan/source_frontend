import { NuxtI18nInstance } from '@nuxtjs/i18n';

// eslint-disable-next-line import/no-mutable-exports
let i18n: NuxtI18nInstance;

export const initializeI18n = (i18nInstance: NuxtI18nInstance) => {
  i18n = i18nInstance;
};

export { i18n };
