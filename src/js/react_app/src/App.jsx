import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import HomeContainer from "Views/base/home/home"
import { ConnectedRouter } from 'connected-react-router'
import configureStore, { history } from './store'

const store = configureStore(/*provide initial state if any*/)

export default class App extends React.Component {
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
