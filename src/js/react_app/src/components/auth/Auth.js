

const Auth = {
  isAuthenticated() { return false },

  isBrowser() { typeof window !== `undefined` },

  setCurrentUser(user) { (window.localStorage.cryptowiseUser = JSON.stringify(user)) },

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

  getUser() {
    window.localStorage.cryptowiseUser ? JSON.parse(window.localStorage.cryptowiseUser) : {}
  },

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
