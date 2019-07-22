import { createStore, applyMiddleware } from "redux"
import logger from "redux-logger"
import thunk from "redux-thunk"
import promiseMiddleware from "redux-promise-middleware"
import rootReducer from "./reducers"

const wares = [logger, thunk, promiseMiddleware]
const middleware = applyMiddleware(...wares)

export default createStore(rootReducer, undefined, middleware)
