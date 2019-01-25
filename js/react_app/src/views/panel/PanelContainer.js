import React from "react"
import ReactDOM from "react-dom"

export default class PanelContainer extends React.Component {
  // state = { comments: [] }

  render() {
    return (
      <nav className="panel">
        <p className="panel-heading">
          CryptoAssets
        </p>
        <div className="panel-block">
          <p className="control has-icons-left">
            <input className="input is-small" type="text" placeholder="search"></input>
            <span className="icon is-small is-left">
              <i className="fas fa-search" aria-hidden="true"></i>
            </span>
          </p>
        </div>
        <p className="panel-tabs">
          <a className="is-active">All</a>
          <a>Momentum</a>
          <a>Volume</a>
          <a>Volatility</a>
        </p>
        <a className="panel-block is-active">
          <span className="panel-icon">
            <i className="fas fa-book" aria-hidden="true"></i>
          </span>
          bulma
        </a>
        <a className="panel-block">
          <span className="panel-icon">
            <i className="fas fa-book" aria-hidden="true"></i>
          </span>
          marksheet
        </a>
        <a className="panel-block">
          <span className="panel-icon">
            <i className="fas fa-book" aria-hidden="true"></i>
          </span>
          minireset.css
        </a>
        <a className="panel-block">
          <span className="panel-icon">
            <i className="fas fa-book" aria-hidden="true"></i>
          </span>
          jgthms.github.io
        </a>
        <a className="panel-block">
          <span className="panel-icon">
            <i className="fas fa-code-branch" aria-hidden="true"></i>
          </span>
          daniellowtw/infboard
        </a>
        <a className="panel-block">
          <span className="panel-icon">
            <i className="fas fa-code-branch" aria-hidden="true"></i>
          </span>
          mojs
        </a>
        <label className="panel-block">
          <input type="checkbox"></input>
          remember me
        </label>
        <div className="panel-block">
          <button className="button is-link is-outlined is-fullwidth">
            reset all filters
          </button>
        </div>
      </nav>
    )
  }
}
