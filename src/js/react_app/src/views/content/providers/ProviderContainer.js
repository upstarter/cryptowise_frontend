import React from "react"
import ReactDOM from "react-dom"
import ProviderHeroComponent from "./ProviderHeroComponent"
import ProviderComponent from "./ProviderComponent"

export default class ProviderContainer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <ProviderHeroComponent />
        <ProviderComponent />
      </React.Fragment>
    )
  }
}
