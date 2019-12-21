// middleware patterns
// filter, map, split, aggregate, compose, enrich, normalize, translate

import { tokensMiddleware } from './tokens.middleware'

export const appMiddleware = [tokensMiddleware]
