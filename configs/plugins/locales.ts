import { Plugin } from '@nuxt/types';
import { initializeI18n } from './i18n';

const locales: Plugin = ({ i18n }) => {
  initializeI18n(i18n);
};

export default locales;
