interface ConstantsProps {
  ACCESS_TOKEN_KEY: String,

  REFRESH_TOKEN_KEY: String,

  LIST_ACTION: {
    EDIT: String,
    ADD: String,
    REMOVE: String,
  },

  LOCALE: String,

  STATUS_CODE: {
    OK: 200,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    PAGE_NOT_FOUND: 404,
    SYSTEM_ERROR: 500,
  },
}

const constants:ConstantsProps = {
  ACCESS_TOKEN_KEY: 'access_token',

  REFRESH_TOKEN_KEY: 'refresh_token',

  LIST_ACTION: {
    EDIT: 'edit',
    ADD: 'add',
    REMOVE: 'remove',
  },

  LOCALE: 'ja',

  STATUS_CODE: {
    OK: 200,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    PAGE_NOT_FOUND: 404,
    SYSTEM_ERROR: 500,
  },
}

export default constants
