import { Plugin } from '@nuxt/types';
import Vue from 'vue';
import Constants from '~/configs/constants';

Vue.prototype.Constants = Constants;

const constants: Plugin = (context) => {
  context.Constants = Constants;
};

export default constants;
