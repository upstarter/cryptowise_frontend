import {API_REQUEST, apiSuccess, apiError} from "Actions/api.actions"
import axios from "Config/axios";

export const apiMiddleware = ({dispatch}) => next => action => {
  next(action) //  keep logger in right order

  if (action.type.includes(API_REQUEST)) {
    const { data } = action.payload
    const { method, url, entity } = action.payload.meta

    axios({
      method: method,
      url: url,
      data: data
    })
    .then( res => JSON.stringify(res) )
    .then( data => dispatch( apiSuccess(data, method, url, entity) ) )
    .catch( error => dispatch( apiError(error, method, url, entity) ) )
  }
}
