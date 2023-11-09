import { Plugin } from '@nuxt/types';
import _ from 'lodash';
import Vue from 'vue';

Vue.prototype.$_ = _;

const lodash: Plugin = (context) => {
  context.$_ = _;
};

export default lodash;
