export const SET_NOTIFICATION = 'SET_NOTIFICATION'
export const REMOVE_NOTIFICATION = 'REMOVE_NOTIFICATION'

export const setNotification = (notification, entity) => ({
  type: `${entity} ${SET_NOTIFICATION}`,
  payload: {
    data: notification,
    meta: entity
  }
})

export const removeNotification = (notification, entity) => ({
  type: `${entity} ${REMOVE_NOTIFICATION}`,
  payload: {
    data: notification,
    meta: entity
  }
})

// ENRICHING DATA (add id)

export const notificationMiddleware = ({dispatch}) => next => action => {
  next(action)
  // filter document actions only
  if (action.type.includes(CREATE_NOTIFICATION)) {
    const { data, meta } = action.payload
    const id = new Date().getMilliseconds()

    // optimize your data structure
    const notification =  {
      id,
      message: data
    }

    // roll the action forward to the reducer
    next( { setNotification(notification, meta.entity) })

    setTimeout(() => next(removeNotification(id, meta.entity)), 5000)
  }
}
