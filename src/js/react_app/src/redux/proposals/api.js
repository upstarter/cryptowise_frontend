import { api_url } from 'Utils/consts';
import axios from "Config/axios";
import {setLoader} from "Redux/core"
import { API_REQUEST,
  API_SUCCESS,
  API_ERROR,
} from 'Redux/core/api.core'

const API = {
  CREATE_PROPOSAL: `${api_url}/proposals`,
  VIEW_PROPOSALS: `${api_url}/proposals`,
}
export const PROPOSALS = '[PROPOSALS]'
export const CREATE_PROPOSAL = `${PROPOSALS} Create`


export const createProposal = (formData) => ({
    type: `${PROPOSALS} ${CREATE_PROPOSAL}`,
    payload: {
      formData: formData
    }
})


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



export const proposalsMiddleware = ({dispatch}) => next => action => {
  next(action) //  keep logger in right order

  switch(action.type) {
    case `${PROPOSALS} ${CREATE_PROPOSAL}`:
      let {formData} = action.payload
      axios.post(`${API.CREATE_PROPOSAL}`, {
            proposal: {
              title: formData.title,
              description: formData.description
            },
          }).then(response => {
            const data = response.data
            if (data.error) {
            } else {
              console.error('user proposal create non-error')
            }
          }).catch(function(error) {
            console.log(error);
          })
      next({...action, formData})
      break;
    }
}
