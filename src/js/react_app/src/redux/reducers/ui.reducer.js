const initState = {
  loader: false
}

export const uiReducer = (ui=initState, action) => {
  const { payload } = action

  switch (action.type) {
    
    case SET_LOADER:
      return {..ui, loading: payload}

      default:
        return ui
  }
}
