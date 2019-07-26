import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import AppHeader from "../header/AppHeader";
import AnalysisContainer from "Content/analysis/AnalysisContainer"
import PortfolioComponent from "Content/portfolio/PortfolioComponent";
import MembershipComponent from "Marketing/MembershipComponent";
import DeveloperComponent from "Developers/DeveloperComponent";
import ProposalComponent from "Content/proposals/ProposalComponent";
import InsightComponent from "Content/insights/InsightComponent";
import SignUpContainer from "Base/SignUpWizard/SignUpContainer";
import BasicLoginForm from "Auth/BasicLoginForm";
import PrivateRoute from "Components/auth/PrivateRoute";
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

import Loadable from "react-loadable";

const HomeComponent = Loadable({
  loader: () => import("./HomeComponent" /* webpackChunkName: "home" */),
  loading() {
    return <div>Loading...</div>;
  }
});

const AboutComponent = Loadable({
  loader: () => import("./AboutComponent" /* webpackChunkName: "about" */),
  loading() {
    return <div>Loading...</div>;
  }
});

const ProviderContainer = Loadable({
  loader: () =>
    import("Content/providers/ProviderContainer" /* webpackChunkName: "provider" */),
  loading() {
    return <div>Loading...</div>;
  }
});

const Protected = () => <h3>Protected</h3>;

class HomeContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      visible: false,
      contentMarginLeft: '0px'
    };
  }
  setContentMarginLeft = (margin) => {
    this.setState({contentMarginLeft: margin})
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

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <BrowserRouter>
          <Layout className={classes.typography, classes.baseLayout} id="wrapper">
            <Drawer
              title="CryptoWise"
              placement="right"
              closable={true}
              onClose={this.onClose}
              visible={this.state.visible}
            >
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </Drawer>
            <AppHeader />
            <SiderMenu setContentMarginLeft={this.setContentMarginLeft}/>
            <Layout className={classes.baseContent}>
              <Content
                style={{
                  marginLeft: `${this.state.contentMarginLeft}`,
                }}>
                <div className={classes.content}>
                  <Route exact path="/" component={HomeComponent} />
                  {/* <Route exact path="/membership" component={MembershipComponent} /> */}
                  <Route exact path="/developers" component={DeveloperComponent} />
                  <Route exact path="/contribute" component={ProviderContainer} />
                  {/* <Route exact path="/insights" component={InsightComponent} /> */}
                  <PrivateRoute exact path="/proposals" component={ProposalComponent} />
                  <PrivateRoute exact path="/analysis" component={AnalysisContainer} />
                  <PrivateRoute exact path="/portfolio" component={PortfolioComponent} />
                  <PrivateRoute exact path="/profile" component={Protected} />
                  <Route exact path="/about" component={AboutComponent} />
                  <Route exact path="/signup" component={SignUpContainer} />
                  <Route exact path="/login" component={BasicLoginForm} />
                  <Route exact path="/logout" component={Logout} />
                  <Route
                    exact
                    path="/privacy_policy"
                    component={PrivacyComponent}
                  />
                </div>
              </Content>
              <Footer className={classes.footer} style={{marginLeft: `${this.state.contentMarginLeft}`}}>
                Aion Labs, Inc. ©2018
              </Footer>
            </Layout>
          </Layout>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

const appStyles = {
  typography: `${typography}`,
  baseLayout: {
    minHeight: '100vh',
    background: `${colors.midTone}`,
    color: 'black'
  },
  logo: {
    height: "64px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  baseContent: {
    marginTop: '64px',
    background: `${colors.grey}`,
  },
  content: {
    height: '100%',
    '& p, & h3': {
      textAlign: 'left'
    },
    '@media (max-width: 576px)': {
      marginLeft: '0',
    },
  },
  footer: {
    background: `${colors.primary}`,
    color: `${colors.green}`,
    textAlign: 'center',
  }
};

export default injectSheet(appStyles)(HomeContainer);
