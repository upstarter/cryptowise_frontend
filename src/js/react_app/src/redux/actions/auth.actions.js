export const USER = '[USER]'
export const LOGIN_USER = `${USER} Login`
export const REGISTER_USER = `${USER} Register`

export const registerUser = (params) =>  ({
    type: REGISTER_USER,
    payload: {
      auth: {
        nickname: params.nickname,
        email: params.email,
        password: params.password,
        topic_knowledge_ids: params.topic_knowledge_ids,
        topic_interest_ids: params.topic_interest_ids,
        terms_accepted: params.terms_accepted,
      }
    }
})

export const loginUser = (params) =>  ({
    type: LOGIN_USER,
    payload: {
      session: params
    }
})
