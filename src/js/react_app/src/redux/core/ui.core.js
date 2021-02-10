export const SET_LOADER = '[Ui] SET_LOADER';

export const setLoader = (state, entity) => ({
  type: SET_LOADER,
  payload: {
    data: state,
    meta: entity
  }
})

const initState = {
  loader: false
}

export const uiReducer = (ui=initState, action) => {
  const { payload } = action

  switch (action.type) {

    case SET_LOADER:
      return {...ui, loading: payload}

      default:
        return ui
  }
}
