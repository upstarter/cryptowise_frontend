import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import AppHeader from "../header/AppHeader";
import AnalysisContainer from "Content/analysis/AnalysisContainer"
import PortfolioComponent from "Content/portfolio/PortfolioComponent";
import HomeComponent from "./HomeComponent";
import MembershipComponent from "Marketing/MembershipComponent";
// import DataScientistComponent from "Developers/DataScientistComponent";
// import AnalystComponent from "Developers/AnalystComponent";
import DeveloperComponent from "Developers/DeveloperComponent";
import ProposalComponent from "Content/proposals/ProposalComponent";
import InsightComponent from "Content/insights/InsightComponent";
import SignUpContainer from "Base/SignUpWizard/SignUpContainer";
import AboutComponent from "Base/home/AboutComponent";
import Logout from "Auth/Logout";
import BasicLoginForm from "Auth/BasicLoginForm";
import AuthRoute from "Components/auth/AuthRoute";
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
          <div className={classes.globe}>
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
                  className={classes.content}
                  style={{
                    marginLeft: `${this.state.contentMarginLeft}`,
                  }}>
                  <Route exact path="/" component={HomeComponent} />
                  {/* <Route exact path="/membership" component={MembershipComponent} /> */}
                  {/* <Route exact path="/data_scientists" component={DataScientistComponent} /> */}
                  {/* <Route exact path="/analysts" component={AnalystComponent} /> */}
                  <Route exact path="/developers" component={DeveloperComponent} />
                  {/* <Route exact path="/contribute" component={ProviderContainer} /> */}
                  {/* <Route exact path="/insights" component={InsightComponent} /> */}
                  <AuthRoute exact path="/proposals" component={ProposalComponent} />
                  {/* <AuthRoute exact path="/analysis" component={AnalysisContainer} /> */}
                  {/* <AuthRoute exact path="/portfolio" component={PortfolioComponent} /> */}
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
                <Footer className={classes.footer} style={{marginLeft: `${this.state.contentMarginLeft}`}}>
                  Aion Labs, Inc. ©{(new Date).getFullYear()}
                </Footer>
              </Layout>
            </Layout>
          </div>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

const appStyles = {
  // globe: `${globalStyles.main}`,
  // typography: `${typography.main}`,
  baseLayout: {
    minHeight: '100vh',
    // paddingTop: 100,
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
    height: 45,
    bottom: 0,
    right: 0,
    left: 0,
    // width: '100vw',
    // background: `${colors.primary}`,
    // color: `${colors.origGreen}`,
    textAlign: 'center',
  }
};

injectSheet(globalStyles)(HomeContainer);
injectSheet(typography)(HomeContainer);
export default injectSheet(appStyles)(HomeContainer);
