import { PROPOSALS,
  CREATE_PROPOSAL,
} from 'Actions/proposals.actions'

import { API_REQUEST,
  API_SUCCESS,
  API_ERROR,
} from 'Actions/api.actions'

let initialState = {
  proposals: {}
}

export const proposalsReducer = (state = initialState, action) => {
  const { payload } = action

  switch (action.type) {

    case `${PROPOSALS} ${CREATE_PROPOSAL}`:
      console.log('user-proposal', payload)
      return { payload }

    case `${PROPOSALS} ${API_SUCCESS}`:
      console.log('auth-succe', payload)
      return { state: payload }

    case `${PROPOSALS} ${API_ERROR}`:
      console.log('auth-error', payload)
      return { state: payload }

    default:
      return state
  }
}
