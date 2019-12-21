export const SET_NOTIFICATION = 'SET_NOTIFICATION'

export const setNotification = (notification, entity) => ({
  type: `${entity} ${SET_NOTIFICATION}`,
  payload: {
    data: notification,
    meta: entity
  }
})
