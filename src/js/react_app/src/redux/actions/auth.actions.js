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
  type: SET_CURRENT_USER,
  payload: token
})
