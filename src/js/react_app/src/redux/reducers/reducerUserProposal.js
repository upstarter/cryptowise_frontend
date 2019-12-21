import { USER_PROPOSAL_CREATE } from "../actions/index";

const initialState = {
  proposal: {}
}

const UserProposalReducer = (state = initialState, action) => {

  switch (action.type) {
    case USER_PROPOSAL_CREATE:
      return {...state, proposal: action.payload};
  }
  return state;
};

export default UserProposalReducer;
