import React from "react"
import ReactDOM from "react-dom"
import ProviderHeroComponent from "Views/providers/ProviderHeroComponent"
import PortfolioComponent from "./PortfolioComponent"

export default class PortfolioContainer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <PortfolioComponent />
      </React.Fragment>
    )
  }
}
