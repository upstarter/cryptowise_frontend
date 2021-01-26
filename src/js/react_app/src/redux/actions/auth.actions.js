export const AUTH = '[AUTH]'
export const REGISTER_USER = `REGISTER_USER`
export const SET_CURRENT_USER = `SET_CURRENT_USER`
export const LOGIN_USER = `LOGIN_USER`
export const AUTH_SUCCESS = `AUTH_SUCCESS`
export const AUTH_ERROR = `AUTH_ERROR`

export const registerUser = (regFormData) => ({
  type : `${AUTH} ${REGISTER_USER}`,
  payload: {
    regFormData,
  }
})

export const authSuccess = (body) => ({
  type : `${AUTH} ${AUTH_SUCCESS}`,
  payload: {
    data: body
  }
})

export const authError = (body) => ({
  type : `${AUTH} ${AUTH_ERROR}`,
  payload: {
    data: body
  }
})

export const setCurrentUser = (token) => ({
  type: `${AUTH} ${SET_CURRENT_USER}`,
  payload: token
})

export const loginUser = (creds) => ({
  type : `${AUTH} ${LOGIN_USER}`,
  payload: {
    creds,
  }
})
