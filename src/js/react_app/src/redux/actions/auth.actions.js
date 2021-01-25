export const AUTH = '[AUTH]'
export const REGISTER_USER = `REGISTER_USER`
export const SET_CURRENT_USER = `SET_CURRENT_USER`
export const AUTH_SUCCESS = `AUTH_SUCCESS`
export const AUTH_ERROR = `AUTH_ERROR`

export const registerUser = (regFormData) => ({
  type : `${AUTH} ${REGISTER_USER}`,
  payload: {
    regFormData,
  }
})

export const authSuccess = (body, method, url, entity) => ({
  type : `${entity} ${AUTH_SUCCESS}`,
  payload: {
    data: body,
    meta: {method, url, entity}
  }
})

export const authError = (body, method, url, entity) => ({
  type : `${entity} ${AUTH_ERROR}`,
  payload: {
    data: body,
    meta: {method, url, entity}
  }
})
