// middleware patterns
// filter, map, split, aggregate, compose, enrich, normalize, translate

import { userTopicsMiddleware } from './user_topics.mdl'
import { proposalsMiddleware } from './proposals.mdl'
import { usersMiddleware } from './users.mdl'

export const appMiddleware = [
  userTopicsMiddleware,
  proposalsMiddleware,
  usersMiddleware
]
