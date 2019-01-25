// https://marmelab.com/blog/2015/12/17/react-directory-structure.html
//
// https://medium.freecodecamp.org/scaling-your-redux-app-with-ducks-6115955638be
//
// https://www.nylas.com/blog/structuring-a-complex-react-redux-project

import React from "react"
import ReactDOM from "react-dom"
import App from "./src/App"
import "normalize.css"
//import styles from "../../css/styles.scss"

// import { getBundles } from 'react-loadable/webpack'

ReactDOM.render(
  // <Loadable.Capture report={moduleName => modules.push(moduleName)}>
  <App />, document.getElementById("app")
    // , () => {
      // We don't need the static css any more once we have launched our application.
  //   const ssStyles = document.getElementById('server-side-styles')
  //   ssStyles.parentNode.removeChild(ssStyles)
  // }
  // </Loadable.Capture>
)
