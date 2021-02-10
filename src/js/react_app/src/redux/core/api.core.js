import axios from "Config/axios";

export const API_REQUEST = 'API_REQUEST'
export const API_SUCCESS = 'API_SUCCESS'
export const API_ERROR = 'API_ERROR'

export const apiRequest = (body, method, url, entity) => ({
  type : `${entity} ${API_REQUEST}`,
  payload: {
    data: body,
    meta: {method, url, entity}
  }
})

export const apiSuccess = (body, entity) => ({
  type : `${entity} ${API_SUCCESS}`,
  payload: {
    data: body,
    meta: {entity}
  }
})

export const apiError = (body, entity) => ({
  type : `${entity} ${API_ERROR}`,
  payload: {
    data: body,
    meta: {entity}
  }
})



export const apiMiddleware = ({dispatch}) => next => action => {
  next(action) //  keep logger in right order

  if (action.type.includes(API_REQUEST)) {
    const { data } = action.payload
    const { entity, method, url  } = action.payload.meta

    axios({
      method: method,
      url: url,
      data: data,
    }).then( res => res )
      .then( data => dispatch( apiSuccess(data, entity) ) )
      .catch( res => dispatch( apiError(res, entity) ) )
  }
}
