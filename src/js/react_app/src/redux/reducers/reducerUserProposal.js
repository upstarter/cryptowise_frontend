import { CREATE_USER_PROPOSAL } from "../actions/index";

const initialState = {
  proposal: {}
}

const UserProposalReducer = (state = initialState, action) => {

  switch (action.type) {
    case CREATE_USER_PROPOSAL:
      return {...state, proposal: action.payload};
  }
  return state;
};

export default UserProposalReducer;
