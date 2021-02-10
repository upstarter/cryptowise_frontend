// middleware patterns
// filter, map, split, aggregate, compose, enrich, normalize, translate

// to implement: filter & split
// fetchTokens -> apiRequest -> setLoader
            // -> apiSuccess -> setLoader -> setTokens
            // -> apiError -> setLoader -> setNotification
import { apiMiddleware } from 'Redux/core/api.core'
import { authMiddleware } from 'Redux/core/auth.core'

export const coreMiddleware = [apiMiddleware, authMiddleware]
