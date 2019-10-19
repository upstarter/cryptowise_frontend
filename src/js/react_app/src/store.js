import { createStore, compose, applyMiddleware } from "redux"
import logger from "redux-logger"
import thunk from "redux-thunk"
import promiseMiddleware from "redux-promise-middleware"
import { routerMiddleware } from 'connected-react-router'
import createRootReducer from "./reducers"
import { createBrowserHistory } from 'history'

export const history = createBrowserHistory()

let wares = [ thunk, promiseMiddleware ]
if (process.env.NODE_ENV !== 'production') {
  wares = [ ...wares, logger ]
}

// export default createStore(rootReducer, undefined, middleware)

export default function configureStore(preloadedState) {
  const store = createStore(
    createRootReducer(history), // root reducer with router state
    preloadedState,
    compose(
      applyMiddleware(
        routerMiddleware(history), // for dispatching history actions
        ...wares
      ),
    ),
  )

  return store
}
