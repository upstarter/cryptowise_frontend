import React, { Component } from "react";
import { connect } from "react-redux";
import Chart from "../charts/spark";

class TokenListContainer extends Component {
  renderToken(tokenData) {
    
    const name = tokenData.ticker;
    const storeOfValue = tokenData.list.map(token => token.storeOfValue);
    const utility = tokenData.list.map(token => token.util);
    const security = tokenData.list.map(token => token.security);
    return (
      <tr key={name}>
        <td><Chart data={storeOfValue} color="green" units="%" /></td>
        <td><Chart data={utility} color="silver" units="%" /></td>
        <td><Chart data={security} color="blue" units="%" /></td>
      </tr>
    );
  }

  render() {
    

    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Asset</th>
            <th>Store of Value (%)</th>
            <th>Utility (%)</th>
            <th>Security (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.tokens.map(this.renderToken)}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = ({ tokens }) => {
  return { tokens: tokens };
}

export default connect(mapStateToProps, null)(TokenListContainer);
