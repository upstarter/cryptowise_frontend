import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import AppHeader from "../header/AppHeader";
import DiscussContainer from "Content/discuss/DiscussContainer"
import DiscussComponent from "Content/discuss/DiscussComponent"
// import PortfolioComponent from "Content/portfolio/PortfolioComponent";
// import AssetsComponent from "Content/assets/AssetsComponent";
import HomeComponent from "./HomeComponent";
import MembershipComponent from "Marketing/MembershipComponent";
// import DataScientistComponent from "Developers/DataScientistComponent";
// import AnalystComponent from "Developers/AnalystComponent";
import AnalysisContainer from "Content/analysis/AnalysisContainer"

import DeveloperComponent from "Developers/DeveloperComponent";
import PostsContainer from "Content/discuss/PostsContainer";
// import FederationsComponent from "../../groups/FederationsComponent";
// import ProposalComponent from "Content/proposals/ProposalComponent";
import ProfileComponent from "User/ProfileComponent";
// import InsightComponent from "Content/insights/InsightComponent";
import SignUpContainer from "Base/SignUpWizard/SignUpContainer";
import AboutComponent from "Base/home/AboutComponent";
import Logout from "Auth/Logout";
import BasicLoginForm from "Auth/BasicLoginForm";
import AuthRoute from "Services/auth/AuthRoute";
import PrivacyComponent from "../PrivacyComponent";
import FooterComponent from "./FooterComponent";
// import TokensContainer from "Content/tokens/TokensContainer"
// import TokenContainer from "Content/tokens/TokenContainer"
// import TopicComponent from "Content/topics/TopicComponent"
import TopicContainer from "Content/topics/TopicContainer"
import { Layout, Menu, Drawer } from "antd";
const { Content, Sider, Footer } = Layout;
const { SubMenu } = Menu;
import config from "Utils/config";

import SiderMenu from "Base/SiderMenu/SiderMenu";
import injectSheet, { jss } from "react-jss";
// import typography from "Styles/typography";
import colors from "Styles/colors";
// import globalStyles from "Styles/globalStyles";

import Loadable from "react-loadable";

//TODO: bundle-loader: require("bundle-loader?lazy&name=admin!../admin")
const lazy = loader => (class extends React.Component {
  componentDidMount() {
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
})

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
    return <>
      <div className={classes.globe}>
          <BrowserRouter>
            <>
            <AppHeader toggleSider={this.onSiderCollapsed} siderCollapsed={this.state.siderCollapsed}  />
            <SiderMenu toggleSider={this.onSiderCollapsed} siderCollapsed={this.state.siderCollapsed} />
            <Layout className={(classes.typography, classes.baseLayout)} id="wrapper">
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
                  <AuthRoute exact path="/profile" component={ProfileComponent} />

                  <Route path="/topics/:topicID" component={TopicContainer} />
                  <Route path="/discuss/topics/:topicID" component={DiscussComponent} />
                  <Route path="/discuss/threads/:threadID" component={PostsContainer} />
                  <Route exact path="/:topicID(discuss)" component={DiscussContainer} />
                  <Route exact path="/:topicID(assets|strategy|economics|research)" component={DiscussContainer} />
                  <Route exact path="/:tokenID(explore)" component={AnalysisContainer} />

                  <Route exact path="/tokens/:tokenID(price|volatility|fundamentals|sentiment)" component={AnalysisContainer} />

                  <Route exact path="/developers" component={DeveloperComponent} />

                  {/*
                    <Route path="/tokens/:tokenId" component={TokenContainer} />
                    <Route exact path="/tokens" component={TokensContainer} />
                    // <Route exact path="/federations" component={FederationsComponent} />
                    // <AuthRoute exact path="/portfolio" component={PortfolioComponent} />
                    // <AuthRoute exact path="/proposals" component={ProposalComponent} />
                    // <Route exact path="/analysts" component={AnalystComponent} />
                    // <Route exact path="/groups" component={GroupsContainer} />
                    // <Route exact path="/groups" component={GroupContainer} />
                    // <Route exact path="/groups/:groupId" component={GroupComponent} />
                    // <Route exact path="/discuss/:groupId/:topicId" component={GroupDiscussContainer} />
                  */}


                  <Route exact path="/about" component={AboutComponent} />
                  <Route exact path="/signup" component={SignUpContainer} />
                  <Route exact path="/login" component={BasicLoginForm} />
                  <Route exact path="/logout" component={Logout} />
                  <Route exact path="/privacy_policy" component={PrivacyComponent} />
                </Content>
                <Footer className={classes.footer} >
                  <span className={classes.trademark} id="trademark">Aion Labs, Inc. ©{(new Date).getFullYear()}</span>
                </Footer>
              </Layout>
            </Layout>
          </>
        </BrowserRouter>
      </div>
    </>;
  }
}

//  <AuthRoute exact path="/profile" component={Protected} />
//  <Route exact path="/membership" component={MembershipComponent} />
//  <Route exact path="/data_scientists" component={DataScientistComponent} />
 // <Route exact path="/developers" component={DeveloperComponent} />
//  <Route exact path="/contribute" component={ProviderContainer} />
//  <Route exact path="/insights" component={InsightComponent} />
//  <AuthRoute exact path="/fds" component={FDSComponent} />
//  <AuthRoute exact path="/strategy" component={StrategistComponent} />
//  <AuthRoute exact path="/ai-ml" component={AIComponent} />
const appStyles = {
  baseLayout: {
    minHeight: '100vh',
    paddingBottom: '10%',
  },
  content: {

    '& p, & h3': {
      textAlign: 'left'
    },
    '@media (max-width: 576px)': {
      marginLeft: '0 !important',
    },
  },
  footer: {
    position: 'fixed',
    display: 'grid',
    gridTemplateAreas: `"space trademark"`,
    gridTemplateColumns: '13fr 1fr',
    alignItems: 'center',
    justifyItems: 'end',
    fontSize: 12,
    height: 84,
    bottom: 0,
    left: 0,
    right: 0,

    textAlign: 'center',
    '& #trademark': {

      '@media (max-width: 480px)': {
        display: 'none',
      },
    },
  },
  trademark: {
    width: 'max-content',
    gridArea: "trademark",
    color: colors.silver6,
  },
}

// injectSheet(globalStyles)(HomeContainer);
// injectSheet(typography)(HomeContainer);
export default injectSheet(appStyles)(HomeContainer);
