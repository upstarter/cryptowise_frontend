import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import HomeContainer from "Views/base/home/home"
import { ConnectedRouter } from 'connected-react-router'
import configureStore, { history } from './store'
import setAuthToken from 'Services/auth/setAuthToken'
import setCurrentUser from 'Actions/setCurrentUser'
import decode from 'jwt-decode'
import 'Css/ant.less'
// import Cookies from 'universal-cookie';

const store = configureStore(/*provide initial state if any*/)
// const cookies = new Cookies();
//
// if (cookies.get('cwjwt')) {
//   store.dispatch(setCurrentUser(decode(cookies.get('cwjwt'))))
// }

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
