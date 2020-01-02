// middleware patterns
// filter, map, split, aggregate, compose, enrich, normalize, translate

// to implement: filter & split
// fetchTokens -> apiRequest -> setLoader
            // -> apiSuccess -> setLoader -> setTokens
            // -> apiError -> setLoader -> setNotification

import { apiMiddleware } from './api.mdl'

export const coreMiddleware = [apiMiddleware]
