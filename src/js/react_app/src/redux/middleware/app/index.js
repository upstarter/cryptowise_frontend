// middleware patterns
// filter, map, split, aggregate, compose, enrich, normalize, translate

import { userTopicsMiddleware } from './user_topics.mdl'
import { proposalsMiddleware } from './proposals.mdl'
import { authMiddleware } from './auth.mdl'

export const appMiddleware = [
  userTopicsMiddleware,
  proposalsMiddleware,
  authMiddleware
]
