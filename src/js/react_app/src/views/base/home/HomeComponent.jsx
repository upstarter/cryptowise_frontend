import React from "react";
import ReactDOM from "react-dom";
import HeroComponent from "./HeroComponent";
import FeaturesComponent from "./FeaturesComponent";
import BlogComponent from "Content/blog/BlogComponent";
import ScrollToTopOnMount from 'Utils/ScrollToTopOnMount'

// import Elm from 'react-elm-components'
// import {Main} from '../../../elm/src/Main'

export default class HomeComponent extends React.Component {
  render() {
    return (
      <React.Fragment>
        <ScrollToTopOnMount />
        <HeroComponent  {...this.props} />
        <FeaturesComponent />
        <BlogComponent />
      </React.Fragment>
    );
  }
}
