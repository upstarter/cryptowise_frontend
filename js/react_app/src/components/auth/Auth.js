// http://tech.tunecore.com/phoenix_react_jwt

export const Auth = {
  isAuthenticated() {  false },

  isBrowser() { typeof window !== `undefined` },

  getUser() {
    window.localStorage.cryptowiseUser ? JSON.parse(window.localStorage.cryptowiseUser) : {}
  },

  setUser(user) { (window.localStorage.cryptowiseUser = JSON.stringify(user)) },

  handleLogin(email, password) {
      if (!isBrowser) return false

      if (email === `cryptowise@gmail.com` && password === `demo`) {
          console.log(`Credentials match! Setting the active user.`)
          return setUser({
              name: `demoUser`,
              email: 'demoEmail',
          })
      }

      return false
  },

  currentUser() { isBrowser && getUser() },

  authenticate(state, cb) {
    handleLogin(state.email, state.password) ? (this.isAuthenticated = true) : false
  },

  logOut(state, cb) {
    this.isAuthenticated = false;
    if (!isBrowser) return

    console.log(`Ensuring the \`cryptowiseUser\` property exists.`)
    setUser({})
    cb()
  }
};
export default Auth
