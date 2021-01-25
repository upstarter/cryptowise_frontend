// middleware patterns
// filter, map, split, aggregate, compose, enrich, normalize, translate

import { tokensMiddleware } from './tokens.middleware'
import { topicsMiddleware } from './topics.middleware'
export const appMiddleware = [tokensMiddleware]
