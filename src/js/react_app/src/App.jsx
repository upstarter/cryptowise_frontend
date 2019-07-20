import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import HomeContainer from "./views/home/home"
import store from "./store"

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <HomeContainer />
      </Provider>
    );
  }
}
