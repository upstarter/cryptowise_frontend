import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Menu, Icon } from "antd";
import injectSheet, { jss } from "react-jss";

const LinkMenu = withRouter(props => {
  const { location } = props;
  const { classes } = props;
  return (
    <Menu
      className={classes.menu}
      theme="dark"
      mode="inline"
      inlineCollapsed="false"
      selectedKeys={[location.pathname]}
      defaultSelectedKeys={["/"]}
    >
      <Menu.Item key="/">
        <Link to="/" style={{ textDecoration: "none" }}>
          <Icon type="team" />
          <span className="nav-text">Join Us</span>
        </Link>
      </Menu.Item>
      <Menu.Item key="/proposals">
        <Link to="/proposals" style={{ textDecoration: "none" }}>
          <Icon type="notification" />
          <span className="nav-text">Feature Proposals</span>
        </Link>
      </Menu.Item>
      <Menu.Item key="/analysis">
        <Icon type="area-chart" />
        <span className="nav-text">
        <Link to="/analysis">
          Analysis
        </Link>
        </span>
      </Menu.Item>
      <Menu.Item key="/portfolio">
          <Link to="/portfolio" style={{ textDecoration: "none" }}>
            <Icon type="user" />
            <span className="nav-text">Portfolio</span>
          </Link>
      </Menu.Item>
      <Menu.Item key="/developers">
        <Link to="/developers" style={{ textDecoration: "none" }}>
          <Icon type="code" />
          <span className="nav-text">Developers</span>
        </Link>
      </Menu.Item>
    </Menu>
  );
});

const menuStyles = {
  menu: {
    height: '100vh',
    "& .nav-text a": {
      textDecoration: "none",
      color: "silver"
    }
  }
};

// <Menu.Item key="/portfolio">
//   <Link to="/portfolio" style={{ textDecoration: "none" }}>
//     <Icon type="user" />
//     <span className="nav-text">Portfolio</span>
//   </Link>
// </Menu.Item>

// <Menu.Item key="/insights">
//   <Link to="/insights" style={{ textDecoration: "none" }}>
//     <Icon type="rise" />
//     <span className="nav-text">Market Insights</span>
//   </Link>
// </Menu.Item>


// <Menu.Item key="/about_tokens">
//   <Link to="/about_tokens" style={{ textDecoration: "none" }}>
//     <Icon type="form" />
//     <span className="nav-text">Philosophy</span>
//   </Link>
// </Menu.Item>
// <Menu.Item key="/contribute">
//   <Link to="/contribute" style={{ textDecoration: "none" }}>
//     <Icon type="form" />
//     <span className="nav-text">Contribute</span>
//   </Link>
// </Menu.Item>
//
// <Menu.Item key="/investors">
//   <Link to="/investors" style={{ textDecoration: "none" }}>
//     <Icon type="usergroup-add" />
//     <span className="nav-text">Investors</span>
//   </Link>
// </Menu.Item>
//

// <Menu.Item key="/protocol">
//   <Icon type="area-chart" />
//   <span className="nav-text">
//   <Link to="/protocol">
//     Protocol
//   </Link>
//   </span>
// </Menu.Item>


//
// <Menu.Item key="/about">
//   <Link to="/about" style={{ textDecoration: "none" }}>
//     <Icon type="team" />
//     <span className="nav-text">About</span>
//   </Link>
// </Menu.Item>



export default injectSheet(menuStyles)(LinkMenu);
