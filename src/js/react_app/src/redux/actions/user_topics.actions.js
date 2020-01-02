export const USER_TOPICS = '[USER_TOPICS]'
export const FETCH_USER_TOPICS = `${USER_TOPICS} Fetch`
export const SET_USER_TOPICS = `${USER_TOPICS} Set`

export const fetchUserTopics = (query) =>  {
  return {
    type: FETCH_USER_TOPICS,
    payload:  {
      data: query
    }
  }
}


export const setUserTopics = (tokens) => ({
  type: SET_USER_TOPICS,
  payload: {
    data: tokens
  }
})
