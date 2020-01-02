import {API_REQUEST, apiSuccess} from "Actions/api.actions"
import axios from "axios";

export const apiMiddleware = ({dispatch}) => next => action => {
  console.log('apiMdl')
  
  next(action) //  keep logger in right order
  if (action.type === API_REQUEST) {
    const { entity, method, url, body  } = action.payload.meta
    axios({
      method: method,
      url: url,
      data: body
    })
    .then( res => res.json() )
    .then( data => dispatch( apiSuccess(data, entity) ) )
    .catch(res => dispatch( apiError(error, entity) ) )
  }
}
