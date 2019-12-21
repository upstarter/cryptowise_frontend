import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import AppHeader from "../header/AppHeader";
import AnalysisContainer from "Content/analysis/AnalysisContainer"
import PortfolioComponent from "Content/portfolio/PortfolioComponent";
import AssetsComponent from "Content/assets/AssetsComponent";
import HomeComponent from "./HomeComponent";
import MembershipComponent from "Marketing/MembershipComponent";
// import DataScientistComponent from "Developers/DataScientistComponent";
import AnalystComponent from "Developers/AnalystComponent";
import DeveloperComponent from "Developers/DeveloperComponent";
import ProposalComponent from "Content/proposals/ProposalComponent";
import ProfileComponent from "User/ProfileComponent";
import InsightComponent from "Content/insights/InsightComponent";
import SignUpContainer from "Base/SignUpWizard/SignUpContainer";
import AboutComponent from "Base/home/AboutComponent";
import Logout from "Auth/Logout";
import BasicLoginForm from "Auth/BasicLoginForm";
import AuthRoute from "Services/auth/AuthRoute";
import PrivacyComponent from "../PrivacyComponent";
import FooterComponent from "./FooterComponent";
import { Layout, Menu, Icon, Drawer } from "antd";
const { Content, Sider, Footer } = Layout;
const { SubMenu } = Menu;
import config from "Utils/config";

import SiderMenu from "Base/SiderMenu/SiderMenu";
import injectSheet, { jss } from "react-jss";
import typography from "Styles/typography";
import colors from "Styles/colors";
import globalStyles from "Styles/globalStyles";

import Loadable from "react-loadable";

//TODO: bundle-loader: require("bundle-loader?lazy&name=admin!../admin")
const lazy = loader => class extends React.Component {
  componentWillMount() {
    loader(mod =>
      this.setState({
        Component: mod.default ? mod.default : mod
      })
    )
  }

  render() {
    const { Component } = this.state

    if (Component !== null) {
      return <Component {...this.props} />
    } else {
      return <div>Loading...</div>
    }
  }
}

// const HomeComponent = Loadable({
//   loader: () => import("./HomeComponent" /* webpackChunkName: "home" */),
//   loading() {
//     return <div>Loading...</div>;
//   }
// });
//
// const AboutComponent = Loadable({
//   loader: () => import("./AboutComponent" /* webpackChunkName: "about" */),
//   loading() {
//     return <div>Loading...</div>;
//   }
// });
//
// const ProviderContainer = Loadable({
//   loader: () =>
//     import("Content/providers/ProviderContainer" /* webpackChunkName: "provider" */),
//   loading() {
//     return <div>Loading...</div>;
//   }
// });

const Protected = () => <h3>Protected</h3>;

class HomeContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      visible: false,
      siderCollapsed: true
    };
  }

  showDrawer = () => {
    this.setState({
      visible: true
    });
  };

  onClose = () => {
    this.setState({
      visible: false
    });
  };

  onSiderCollapsed = () => {
    this.setState({
      siderCollapsed: !this.state.siderCollapsed
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
          <div className={classes.globe}>
              <BrowserRouter>
                <>
                <AppHeader toggleSider={this.onSiderCollapsed} siderCollapsed={this.state.siderCollapsed}  />
                <SiderMenu toggleSider={this.onSiderCollapsed} siderCollapsed={this.state.siderCollapsed} />
                <Layout className={classes.typography, classes.baseLayout} id="wrapper">
                  <Drawer
                    title="CryptoWise"
                    placement="right"
                    closable={true}
                    onClose={this.onClose}
                    visible={this.state.visible}
                  >
                    <p>Wrap with separate router?</p>
                    <p>Or move?</p>
                    <p>Some contents...</p>
                  </Drawer>
                  <Layout className={classes.baseContent}>
                    <Content className={classes.content}>
                      <Route exact path="/" component={HomeComponent} />
                      {/* <Route exact path="/membership" component={MembershipComponent} /> */}
                      {/* <Route exact path="/data_scientists" component={DataScientistComponent} /> */}
                      <Route exact path="/analysts" component={AnalystComponent} />
                      {/* <Route exact path="/developers" component={DeveloperComponent} /> */}
                      {/* <Route exact path="/contribute" component={ProviderContainer} /> */}
                      {/* <Route exact path="/insights" component={InsightComponent} /> */}
                      <AuthRoute exact path="/proposals" component={ProposalComponent} />
                      <AuthRoute exact path="/profile" component={ProfileComponent} />
                      {/* <AuthRoute exact path="/fds" component={FDSComponent} /> */}
                      {/* <AuthRoute exact path="/strategy" component={StrategistComponent} /> */}
                      {/* <AuthRoute exact path="/ai-ml" component={AIComponent} /> */}
                      {/* <AuthRoute exact path="/analysis" component={AnalysisContainer} /> */}
                      <AuthRoute exact path="/portfolio" component={PortfolioComponent} />
                      <AuthRoute exact path="/assets" component={AssetsComponent} />
                      {/* <AuthRoute exact path="/profile" component={Protected} /> */}
                      <Route exact path="/about" component={AboutComponent} />
                      <Route exact path="/signup" component={SignUpContainer} />
                      <Route exact path="/login" component={BasicLoginForm} />
                      <Route exact path="/logout" component={Logout} />
                      <Route
                        exact
                        path="/privacy_policy"
                        component={PrivacyComponent}
                      />
                    </Content>
                    <Footer className={classes.footer} >
                      <span id="trademark">Aion Labs, Inc. ©{(new Date).getFullYear()}</span>
                    </Footer>
                  </Layout>
                </Layout>
              </>
            </BrowserRouter>

      </div>
      </React.Fragment>
    );
  }
}

const appStyles = {
  // globe: `${globalStyles.main}`,
  // typography: `${typography.main}`,
  baseLayout: {
    minHeight: '100vh',
    paddingBottom: '10%',
    // background: `${colors.midTone}`,
    // color: 'black'
  },
  // logo: {
  //   height: "54px",
  //   display: "flex",
  //   alignItems: "center",
  //   justifyContent: "center"
  // },
  baseContent: {
    // marginTop: '45px',
    // minHeight: '100%',
    // background: `${colors.grey}`,
  },
  content: {
    '& p, & h3': {
      textAlign: 'left'
    },
    '@media (max-width: 576px)': {
      marginLeft: '0',
    },
  },
  footer: {
    position: 'fixed',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'left',
    fontSize: 12,
    height: 50,
    bottom: 0,
    right: 0,
    left: 0,
    // width: '100vw',
    // background: `${colors.primary}`,
    // color: `${colors.origGreen}`,
    textAlign: 'center',
    '& #trademark': {

      '@media (max-width: 480px)': {
        display: 'none',
      },
    },
  }
};

injectSheet(globalStyles)(HomeContainer);
injectSheet(typography)(HomeContainer);
export default injectSheet(appStyles)(HomeContainer);
