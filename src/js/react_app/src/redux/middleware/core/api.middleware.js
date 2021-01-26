import {API_REQUEST, apiSuccess} from "Actions/api.actions"

export const apiMiddleware = ({dispatch}) => next => action => {
  next(action) //  keep logger in right order

  if (action.type === API_REQUEST) {
    const { entity, method, url } = action.payload.meta

    fetch(url, {method})
      .then( res => res.json() )
      .then( data => dispatch( apiSuccess(data, entity) ) )
      .catch(res => dispatch( apiError(error, entity) ) )
  }
}
