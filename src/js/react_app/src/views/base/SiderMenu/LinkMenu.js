import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Menu } from "antd";
import injectSheet, { jss } from "react-jss";
import AuthService from 'Services/auth/AuthService'
import { UserAddOutlined,
  UserOutlined,
  PieChartOutlined,
  BulbOutlined,
  CloseOutlined,
  CommentOutlined,
  DotChartOutlined,
  CodeOutlined,
  LoginOutlined,
  LogoutOutlined,
  QuestionOutlined,
  ExperimentOutlined
 } from '@ant-design/icons';

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
        {
          <Menu.Item title={false} title={false} key="/explore">
            <Link to="/explore" style={{ textDecoration: "none" }}>
              <ExperimentOutlined  />
              <span className={classes.navText}>Explore</span>
            </Link>
          </Menu.Item>
        }
        {
          <Menu.Item title={false} title={false} key="/discuss">
            <Link to="/discuss" style={{ textDecoration: "none" }}>
              <CommentOutlined type="comment-outlined" />
              <span className={classes.navText}>Discuss</span>
            </Link>
          </Menu.Item>
        }
        { !auth.signedIn() ?
          <Menu.Item title={false} key="/">
            <Link to="/" style={{ textDecoration: "none" }}>
              <UserAddOutlined />
              <span className={classes.navText}>Sign Up</span>
            </Link>
          </Menu.Item> : '' }
        {/* { auth.signedIn() ?
          <Menu.Item title={false} key="/fds">
            <Icon type="build" />
            <span className={classes.navText}>
            <Link to="/fds">
              Curate
            </Link>
            </span>
          </Menu.Item> : ''
        } */}
        {/*{
          <Menu.Item title={false} key={"/federations"}>
            <Link to="/federations" style={{ textDecoration: "none" }}>
              <Icon type="team" />
              <span className={classes.navText}>Collaborate</span>
            </Link>
          </Menu.Item>
        } */}

        {/*
        // { !auth.signedIn() ?
        //   <Menu.Item title={false} key="/analysts">
        //     <Link to="/analysts" style={{ textDecoration: "none" }}>
        //       <UserOutlined />
        //       <span className={classes.navText}>Contribute</span>
        //     </Link>
        //   </Menu.Item>  : '' }
        */}
          {/*
            // { auth.signedIn() ?
            //   <Menu.Item title={false} key="/proposals">
            //     <Link to="/proposals" style={{ textDecoration: "none" }}>
            //       <BulbOutlined />
            //       <span className={classes.navText}>Ideate</span>
            //     </Link>
            //   </Menu.Item> : ''
            // }
            // { auth.signedIn() ?
            //   <Menu.Item title={false} key="/portfolio">
            //     <Link to="/portfolio" style={{ textDecoration: "none" }}>
            //       <PieChartOutlined />
            //       <span className={classes.navText}>Portfolio</span>
            //     </Link>
            //   </Menu.Item> : ''
            // }
        */}
        { auth.signedIn() ?
          <Menu.Item title={false} key="/profile">
            <Link to="/profile" style={{ textDecoration: "none" }}>
            <UserOutlined />
              <span className={classes.navText}>Profile</span>
            </Link>
          </Menu.Item> : ''
        }

      {/*
        // {
        //   <Menu.Item title={false} key="/closemenu">
        //     <Link to="/close" style={{ textDecoration: "none" }}>
        //     <CloseOutlined />
        //       <span className={classes.navText}>Close</span>
        //     </Link>
        //   </Menu.Item>
        // }
        */}
      </Menu>

      <Menu
        className={classes.menu2}
        theme="dark"
        mode="inline"
        selectedKeys={[location.pathname]}
        defaultSelectedKeys={["/"]}
        onSelect={onSelect}
      >

        { <Menu.Item title={false} key="/login">
            <Link to="/login" style={{ textDecoration: "none" }}>
            <LoginOutlined />
            <span className={classes.navText}>Sign In</span>
            </Link>
          </Menu.Item> }
        { <Menu.Item title={false} key="/developers">
          <Link to="/developers" style={{ textDecoration: "none" }}>
            <CodeOutlined />
            <span className={classes.navText}>Dev</span>
          </Link>
        </Menu.Item>
        }

        {/* <Menu.Item title={false} key="/contact">Contact</Menu.Item> */}
        { <Menu.Item title={false} key="/about">
            <Link to="/about" style={{ textDecoration: "none" }}>
            <QuestionOutlined />
              <span className={classes.navText}>About</span>
            </Link>
          </Menu.Item>
        }
        { <Menu.Item title={false} key="/logout">
            <Link to="/logout" style={{ textDecoration: "none" }}>
            <LogoutOutlined />
            <span className={classes.navText}>Sign Out</span>
            </Link>
          </Menu.Item> }
      </Menu>

    </div>
  );
});

const menuStyles = {
  menus: {
    display: 'flex',
    flexDirection: 'column',
    height: '80vh',
    paddingTop: 21,
    justifyContent: 'space-between',
    '& .ant-menu-item-selected': {}
  },
  navText: {
    color: "silver",

  },

};

{/* <Menu.Item title={false} key="/analysis">
  <Icon type="area-chart" />
  <span className={classes.navText}>
  <Link to="/analysis">
    Analysis
  </Link>
  </span>
</Menu.Item> */}
{/* <Menu.Item title={false} key="/portfolio">
    <Link to="/portfolio" style={{ textDecoration: "none" }}>
      <Icon type="user" />
      <span className={classes.navText}>Portfolio</span>
    </Link>
</Menu.Item> */}
{/* <Menu.Item title={false} key="/data_scientists">
  <Link to="/data_scientists" style={{ textDecoration: "none" }}>
    <Icon type="code" />
    <span className={classes.navText}>Data Scientists</span>
  </Link>
</Menu.Item> */}

// <Menu.Item title={false} key="/insights">
//   <Link to="/insights" style={{ textDecoration: "none" }}>
//     <Icon type="rise" />
//     <span className={classes.navText}>Market Insights</span>
//   </Link>
// </Menu.Item>


// <Menu.Item title={false} key="/about_tokens">
//   <Link to="/about_tokens" style={{ textDecoration: "none" }}>
//     <Icon type="form" />
//     <span className={classes.navText}>Philosophy</span>
//   </Link>
// </Menu.Item>
// <Menu.Item title={false} key="/contribute">
//   <Link to="/contribute" style={{ textDecoration: "none" }}>
//     <Icon type="form" />
//     <span className={classes.navText}>Contribute</span>
//   </Link>
// </Menu.Item>
//
// <Menu.Item title={false} key="/investors">
//   <Link to="/investors" style={{ textDecoration: "none" }}>
//     <Icon type="usergroup-add" />
//     <span className={classes.navText}>Investors</span>
//   </Link>
// </Menu.Item>
//

// <Menu.Item title={false} key="/protocol">
//   <Icon type="area-chart" />
//   <span className={classes.navText}>
//   <Link to="/protocol">
//     Protocol
//   </Link>
//   </span>
// </Menu.Item>


//
// <Menu.Item title={false} key="/about">
//   <Link to="/about" style={{ textDecoration: "none" }}>
//     <Icon type="team" />
//     <span className={classes.navText}>About</span>
//   </Link>
// </Menu.Item>



export default injectSheet(menuStyles)(LinkMenu);
