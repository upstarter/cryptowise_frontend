import { createStore,  applyMiddleware } from "redux"
import logger from "redux-logger"
import createRootReducer from "Reducers"
import createBrowserHistory from '../appHistory';
import promiseMiddleware from "redux-promise-middleware"
import { routerMiddleware } from 'connected-react-router'
import { coreMiddleware } from 'Redux/middleware/core'
import { appMiddleware } from 'Redux/middleware/app'
import { composeWithDevTools } from 'redux-devtools-extension';

export const history = createBrowserHistory

let wares = [ promiseMiddleware(), ...coreMiddleware, ...appMiddleware ]
if (process.env.NODE_ENV !== 'production') {
  wares = [ ...wares, logger ]
}

// export default createStore(rootReducer, undefined, middleware)
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

export default function configureStore(preloadedState) {
  const store = createStore(
    createRootReducer(history), // root reducer with router state
    preloadedState,
    composeWithDevTools(
      applyMiddleware(
        routerMiddleware(history), // for dispatching history actions
        ...wares
      ),
    ),
  )

  return store
}
