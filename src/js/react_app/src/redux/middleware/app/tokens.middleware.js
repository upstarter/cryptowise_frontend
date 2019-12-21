import {TOKENS, FETCH_TOKENS, setTokens} from "Actions/tokens.actions"
import {API_SUCCESS, API_ERROR, apiRequest} from "Actions/api.actions"
import {setLoader} from "Actions/ui.actions"
import {API} from "Redux/constants/api"

export const tokensMiddleware = ({dispatch}) => next => action => {
  next(action) //  keep logger in right order

  switch(action.type) {

    case FETCH_TOKENS:
      dispatch(apiRequest(null, 'GET', API.TOKENS, TOKENS))
      dispatch(setLoader(true))
      break;

    case `${TOKENS} ${API_SUCCESS}`:
      dispatch(setTokens(action.payload))
      dispatch(setLoader(false))
      break;

    case `${TOKENS} ${API_ERROR}`:
      next([
        createNotification(action.payload.data.message, TOKENS),
        setLoader(false, TOKENS)
      ])
      break;
  }
}
