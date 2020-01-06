export const USER = '[USER]'
export const LOGIN_USER = `${USER} Login`

export const loginUser = (params) =>  ({
    type: LOGIN_USER,
    payload: {
      session: params
    }
})
