// ENRICHING DATA (add id)

import {CREATE_NOTIFICATION, setNotification, removeNotification} from "Actions/notifications.actions"

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
