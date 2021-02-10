import { createStore, compose, applyMiddleware } from "redux"
import logger from "redux-logger"
import thunk from "redux-thunk"
import { createBrowserHistory } from 'history'
import promiseMiddleware from "redux-promise-middleware"
import { routerMiddleware } from 'connected-react-router'
import { coreMiddleware } from 'Redux/core'
import { appMiddleware } from 'Redux/app_middleware'
import createRootReducer from "Redux/root_reducers"

export const history = createBrowserHistory()

let wares = [ ...coreMiddleware, ...appMiddleware ]
if (process.env.NODE_ENV !== 'production') {
  wares = [ ...wares, logger ]
}

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
