import { createStore, compose, applyMiddleware } from "redux"
import logger from "redux-logger"
import thunk from "redux-thunk"
import createRootReducer from "Reducers"
import { createBrowserHistory } from 'history'
import promiseMiddleware from "redux-promise-middleware"
import { routerMiddleware } from 'connected-react-router'
import { coreMiddleware } from 'Redux/middleware/core'
import { appMiddleware } from 'Redux/middleware/app'

export const history = createBrowserHistory()

let wares = [ promiseMiddleware, ...coreMiddleware, ...appMiddleware ]
console.log(wares)
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
