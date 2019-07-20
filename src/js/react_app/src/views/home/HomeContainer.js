import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import AppHeader from "../../views/header/AppHeader";
import AnalysisContainer from "../../views/analysis/AnalysisContainer"
import PortfolioComponent from "../../views/portfolio/PortfolioComponent";
import MembershipComponent from "../../views/marketing/MembershipComponent";
import DeveloperComponent from "../../views/developers/DeveloperComponent";
import ProposalComponent from "../../views/proposals/ProposalComponent";
import InsightComponent from "../../views/insights/InsightComponent";
import SignUpContainer from "../../views/SignUpWizard/SignUpContainer";
import Login from "../../views/auth/Login";
import Logout from "../../views/auth/Logout";
import Signup from "../../views/auth/Signup";
import PrivateRoute from "../../components/auth/PrivateRoute";
import PrivacyComponent from "../PrivacyComponent";
import FooterComponent from "./FooterComponent";
import { Layout, Menu, Icon, Drawer } from "antd";
const { Content, Sider, Footer } = Layout;
const { SubMenu } = Menu;
import config from "../../utils/config";

import SiderMenu from "../../views/SiderMenu/SiderMenu";
import injectSheet, { jss } from "react-jss";
import typography from "../../styles/typography";
import colors from "../../styles/colors";

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
    import("../providers/ProviderContainer" /* webpackChunkName: "provider" */),
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
                  <Route exact path="/membership" component={MembershipComponent} />
                  <Route exact path="/developers" component={DeveloperComponent} />
                  <Route exact path="/contribute" component={ProviderContainer} />
                  <Route exact path="/insights" component={InsightComponent} />
                  <Route exact path="/proposals" component={ProposalComponent} />
                  <Route exact path="/analysis" component={AnalysisContainer} />
                  <Route exact path="/portfolio" component={PortfolioComponent} />
                  <PrivateRoute exact path="/profile" component={Protected} />
                  <Route exact path="/about" component={AboutComponent} />
                  <Route exact path="/signup" component={SignUpContainer} />
                  <Route exact path="/login" component={Login} />
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
