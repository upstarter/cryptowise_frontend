import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Menu, Icon } from "antd";
import injectSheet, { jss } from "react-jss";
import AuthService from 'Services/auth/AuthService'

const LinkMenu = withRouter(props => {
  const { location } = props;
  const { classes } = props;
  let auth = new AuthService;


  const onSelect = () => {
    props.onSelect()
  }

  return (
    <div className={classes.menus}>
      <Menu
        className={classes.menu1}
        theme="dark"
        mode="inline"
        selectedKeys={[location.pathname]}
        defaultSelectedKeys={["/"]}
        onSelect={onSelect}
      >
        {/* auth.signedIn() ?
          <Menu.Item key="/fds">
            <Icon type="build" />
            <span className="nav-text">
            <Link to="/discuss">
              Discuss
            </Link>
            </span>
          </Menu.Item> : ''
        */}
        { !auth.signedIn() ?
          <Menu.Item key="/">
            <Link to="/" style={{ textDecoration: "none" }}>
              <Icon type="user-add" />
              <span className="nav-text">Sign Up</span>
            </Link>
          </Menu.Item> : '' }
        {/* { !auth.signedIn() ?
          <Menu.Item key="/signup">
            <Link to="/signup" style={{ textDecoration: "none" }}>
              <Icon type="dot-chart" />
              <span className="nav-text">Explore</span>
            </Link>
          </Menu.Item>  : '' } */}

        {/* { auth.signedIn() ?
          <Menu.Item key="/fds">
            <Icon type="build" />
            <span className="nav-text">
            <Link to="/fds">
              Curate
            </Link>
            </span>
          </Menu.Item> : ''
        } */}
        {
          <Menu.Item key={"/federations"}>
            <Link to="/federations" style={{ textDecoration: "none" }}>
              <Icon type="team" />
              <span className="nav-text">Collaborate</span>
            </Link>
          </Menu.Item>
        }
        {
          <Menu.Item key="/analysis">
            <Link to="/analysis" style={{ textDecoration: "none" }}>
              <Icon type="team" />
              <span className="nav-text">Discuss</span>
            </Link>
          </Menu.Item>
        }
        { !auth.signedIn() ?
          <Menu.Item key="/analysts">
            <Link to="/analysts" style={{ textDecoration: "none" }}>
              <Icon type="user" />
              <span className="nav-text">Contribute</span>
            </Link>
          </Menu.Item>  : '' }

        { auth.signedIn() ?
          <Menu.Item key="/proposals">
            <Link to="/proposals" style={{ textDecoration: "none" }}>
              <Icon type="bulb" />
              <span className="nav-text">Ideate</span>
            </Link>
          </Menu.Item> : ''
        }
        { auth.signedIn() ?
          <Menu.Item key="/portfolio">
            <Link to="/portfolio" style={{ textDecoration: "none" }}>
              <Icon type="pie-chart" />
              <span className="nav-text">Portfolio</span>
            </Link>
          </Menu.Item> : ''
        }

        { auth.signedIn() ?
          <Menu.Item key="/profile">
            <Link to="/profile" style={{ textDecoration: "none" }}>
            <Icon type="user" />
              <span className="nav-text">Profile</span>
            </Link>
          </Menu.Item> : ''
        }

        {
          <Menu.Item key="/closemenu">
            <Link to="/profile" style={{ textDecoration: "none" }}>
            <Icon type="close" />
              <span className="nav-text">Close</span>
            </Link>
          </Menu.Item>
        }
      </Menu>
      {/* <Menu
        className={classes.menu2}
        theme="dark"
        mode="inline"
        selectedKeys={[location.pathname]}
        defaultSelectedKeys={["/"]}
        onSelect={onSelect}
      >
        <Menu.Item key="/developers">
          <Link to="/developers" style={{ textDecoration: "none" }}>
            <Icon type="code" />
            <span className="nav-text">Developers</span>
          </Link>
        </Menu.Item>
      </Menu> */}
    </div>
  );
});

const menuStyles = {
  menus: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'space-between',

    "& .nav-text a": {
      textDecoration: "none",
      color: "silver"
    }
  },

  menu2: {
    marginBottom: 120
  }
};

{/* <Menu.Item key="/analysis">
  <Icon type="area-chart" />
  <span className="nav-text">
  <Link to="/analysis">
    Analysis
  </Link>
  </span>
</Menu.Item> */}
{/* <Menu.Item key="/portfolio">
    <Link to="/portfolio" style={{ textDecoration: "none" }}>
      <Icon type="user" />
      <span className="nav-text">Portfolio</span>
    </Link>
</Menu.Item> */}
{/* <Menu.Item key="/data_scientists">
  <Link to="/data_scientists" style={{ textDecoration: "none" }}>
    <Icon type="code" />
    <span className="nav-text">Data Scientists</span>
  </Link>
</Menu.Item> */}

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
