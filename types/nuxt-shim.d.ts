import { LoDashStatic } from 'lodash';

import { ConstantsProps } from '@configs/constants';

declare module 'vue/types/vue' {
  interface Vue {
    Constants: ConstantsProps;
    $_: LoDashStatic;
  }
}

declare module 'vuex/types/index' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars,no-unused-vars
  interface Store<S> {
    Constants: ConstantsProps;
    $_: LoDashStatic;
  }
}

declare module '@nuxt/types' {
  interface Context {
    Constants: ConstantsProps;
    $_: LoDashStatic;
  }
}
