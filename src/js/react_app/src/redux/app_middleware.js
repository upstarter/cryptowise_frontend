// middleware patterns
// filter, map, split, aggregate, compose, enrich, normalize, translate

import { tokensMiddleware } from 'Redux/tokens'
import { topicsMiddleware } from 'Redux/topics'
import { proposalsMiddleware } from 'Redux/proposals'
import { discussionsMiddleware } from 'Redux/discussions'
export const appMiddleware = [
  tokensMiddleware,
  proposalsMiddleware,
  discussionsMiddleware
]
