// middleware patterns
// filter, map, split, aggregate, compose, enrich, normalize, translate

// to implement: filter & split
// fetchTokens -> apiRequest -> setLoader
            // -> apiSuccess -> setLoader -> setTokens
            // -> apiError -> setLoader -> setNotification
import { apiMiddleware } from './api.middleware'
import { authMiddleware } from './auth.middleware'

export const coreMiddleware = [apiMiddleware, authMiddleware]