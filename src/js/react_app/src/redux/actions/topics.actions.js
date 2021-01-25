export const TOPICS = '[TOPICS]'
export const SET_TOPICS = `${TOPICS} Set`

export const setTopics = (topics) => ({
    type: SET_TOPICS,
    payload: {
      topics: topics
    }
})
