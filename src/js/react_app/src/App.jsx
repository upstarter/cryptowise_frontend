import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import HomeContainer from "Views/base/home/home"
import { ConnectedRouter } from 'connected-react-router'
import configureStore, { history } from './store'
import setAuthToken from 'Components/auth/setAuthToken'
import setCurrentUser from 'Actions/setCurrentUser'
import decode from 'jwt-decode'

const store = configureStore(/*provide initial state if any*/)

if (localStorage.cw_token) {
  setAuthToken(localStorage.cw_token)
  store.dispatch(setCurrentUser(decode(localStorage.cw_token)))
}

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <HomeContainer />
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App
