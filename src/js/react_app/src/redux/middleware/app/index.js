// middleware patterns
// filter, map, split, aggregate, compose, enrich, normalize, translate

import { userTopicsMiddleware } from './user_topics.mdl'

export const appMiddleware = [userTopicsMiddleware]
