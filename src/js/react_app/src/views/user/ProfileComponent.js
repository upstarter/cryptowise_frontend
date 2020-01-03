import React from 'react'
import ReactDOM from 'react-dom'
import {
  Link,
  withRouter
} from "react-router-dom";
import injectSheet, { jss } from 'react-jss'
import { api_url } from 'Utils/consts'
import { Icon, Switch, Tabs } from 'antd';
const { TabPane } = Tabs;
import axios from "axios";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import AuthService from 'Services/auth/AuthService'
import { fetchUserTopics } from 'Actions/user_topics.actions'
import colors from "Styles/colors"

class ProfileComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      initLoading: true,
      loading: false,
      roleData: [],
      list: [],
      page: 1,
      ModalContent: '',
      visible: false,
      confirmLoading: false
    };
  }


  componentDidMount() {
    this.getData(res => {
      this.setState({
        initLoading: false,
        roleData: res.data["roles"]
      });
    });
  }

  getData = callback => {
    const url = `${api_url}/user/roles`
    axios.get(url).then((res) => {
      callback(res.data)
    })
  };

  postData = data => {
    const url = `${api_url}/user/update_role`
    axios.put(url, data).then((res) => {
      this.setState({roleData: res.data.data["roles"]})
    })
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  saveFormRef = formRef => {
    this.formRef = formRef;
  };

  onChange = (role, bool) => {
    // e.preventDefault();
    // e.stopPropagation();
    console.log(role, bool)
    const auth = new AuthService
    let id = auth.getProfileId()
    let data = {role: {user_id: id, role: role, is_role: bool}}
    this.postData(data)
  }

  onTabChange = (activeKey) => {
    if (activeKey === "2") {
      console.log('yo', activeKey)
      this.props.fetchUserTopics('uuu')
    }
  }

  render() {
    const { classes } = this.props
    const { initLoading, loading, roleData, visible, confirmLoading, ModalContent } = this.state;
    return (
      <div className="dark-wrap">
        <React.Fragment>
          <section id="profile" className={classes.profiles}>
            <Tabs
              defaultActiveKey="1"
              onChange={this.onTabChange}
              // tabPosition="left"
              size="large"
              tabBarStyle={
                  {
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    position: 'fixed',
                    width: '500px',
                    backgroundColor: `${colors.primaryDark}`,
                    marginTop: 50,
                    color: '#fff'
                  }
                }
              >
              <TabPane
                tab={
                  <span>
                    <Icon type="user" />
                    Profile
                  </span>
                }
                key="1"
              >
                <div id="profile-blurb">
                  <div id="profile-blurb-intro">
                    <h3 id="blurb-title">Hyper-Disruptor Profile</h3>
                    <h4 id='blurb-subtitle' className='subtitle-small'>
                      Master the Markets
                    </h4>
                    <p>
                      We recommend starting as a Data Curator of FDS (Financial Data
                      Structures). Once a certain mastery is attained, you can level
                      up into Investment Strategist or Machine Learning Financial
                      Engineer to exploit your acquired wisdom and talents in market
                      competitions and coop-etitions.
                    </p>
                    <p>
                      Or just explore on your own and master market research & analysis
                      for maximal profit from the free market system.
                    </p>
                    {/* <p>
                      <Link to="/roadmap">The Roadmap</Link> includes team formation with tools and systems.
                    </p> */}
                  </div>
                </div>

                <div id="profile-items" className={classes.profileItems}>
                  <div className="profile-items-heading">
                    <h3>Core Capabilities</h3>
                  </div>

                  <div className="profile-column">
                    <div className='switch'>
                      <Switch
                        checked={roleData.includes("curator")}
                        name="curator"
                        ref="curator"
                        onChange={e => this.onChange("curator", e)}
                        checkedChildren={<Icon type="check" />}
                        unCheckedChildren={<Icon type="close" />}
                      />
                      <Icon className='icon' type="cloud-upload" /><span>Data Curator (FDS)</span>
                    </div>
                    <div className='switch'>
                      <Switch
                        checked={roleData.includes("analyst")}
                        name="featureAnalyst"
                        ref="featureAnalyst"
                        onChange={e => this.onChange("analyst", e)}
                        checkedChildren={<Icon type="check" />}
                        unCheckedChildren={<Icon type="close" />}
                      />
                      <Icon className='icon' type="dot-chart" /><span>Feature Analyst</span>
                    </div>
                    <div className='switch'>
                      <Switch
                        checked={roleData.includes("strategist")}
                        name="strategist"
                        ref="strategist"
                        onChange={e => this.onChange("strategist", e)}
                        checkedChildren={<Icon type="check" />}
                        unCheckedChildren={<Icon type="close" />}
                      />
                      <Icon className='icon' type="bar-chart" /><span>Investment Strategist</span>
                    </div>
                    <div className='switch'>
                      <Switch
                        checked={roleData.includes("engineer")}
                        name="MLEngineer"
                        ref="MLEngineer"
                        onChange={e => this.onChange("engineer", e)}
                        checkedChildren={<Icon type="check" />}
                        unCheckedChildren={<Icon type="close" />}
                      />
                      <Icon className='icon' type="cluster" /><span>Machine Learning Engineer</span>
                    </div>

                    <div className='switch'>
                      <Switch
                        checked={roleData.includes("tpm")}
                        name="tpm"
                        ref="tpm"
                        onChange={e => this.onChange("tpm", e)}
                        checkedChildren={<Icon type="check" />}
                        unCheckedChildren={<Icon type="close" />}
                      />
                      <Icon className='icon' type="project" /><span>Technical Project Manager</span>
                    </div>
                  </div>
                </div>
              </TabPane>
              <TabPane
                tab={
                  <span>
                    <Icon type="fire" />
                    My Topics
                  </span>
                }
                key="2"
              >
                Tab 2
              </TabPane>
            </Tabs>
          </section>
        </React.Fragment>
      </div>

    )
  }
}

const profileStyles = {
  modal: {
  },
  profiles: {
    display: 'grid',
    // justifyItems: 'center',
    gridTemplateRows: '1fr auto',
    gridTemplateAreas: '"header" "content"',
    justifyItems: 'center',

    '& #profile-blurb': {
      gridArea: 'header',
      maxWidth: 600,
      margin: '140px 0 0 0',

      '@media (max-width: 860px)': {
        gridRow: '1 / 2',
      },

      '@media (min-width: 860px)': {
        gridRow: '1 / 2',
      },

      '& #profile-blurb-intro': {
        '@media (max-width: 860px)': {
        },

        '@media (min-width: 860px)': {
        },

        '& #blurb-title': {
          textAlign: 'center',
          lineHeight: '4rem',
          padding: [0, 0, 0, 0],
          fontSize: '3rem !important',
          color: `${colors.silver} !important`,

          '@media (max-width: 860px)': {
          },
        },
        '& #blurb-subtitle': {
          fontSize: '2.3rem',
          lineHeight: '2rem',
          textAlign: 'center',
          color: `${colors.lightBlack} !important`,
          marginBottom: 30,

          '@media (max-width: 860px)': {
          },
        },

        '& p': {
          color: `${colors.offWhite}`,
          fontSize: '1.7rem !important'
        },
      },
    },
  },

  profileItems: {
    gridArea: 'content',
    padding: [0, 3, 0, 5],
    marginTop: 20,

    '@media (max-width: 860px)': {
      gridRow: '2 / 3',
    },

    '@media (min-width: 860px)': {
      gridRow: '2 / 3',
    },

    '& .profile-items-heading': {
      textAlign: 'center',
      zIndex: 10,
      marginBottom: 30,
      color: '#fff !important',
      background: `${colors.primaryDark}`,
      '-webkit-perspective': 1000,
      '-webkit-backface-visibility': 'hidden',
      '& h3': {
        textAlign: 'center',
        fontSize: '3.3rem !important',
        letterSpacing: '0.5rem',
        color: '#fff',

        '@media (max-width: 860px)': {
          fontSize: '2.7rem !important',
        },
      },
    },

    '& .profile-column': {
      color: `${colors.offWhite} !important`,


      '@media (max-width: 860px)': {
        gridRow: '2 / 3',
        '& .switch': {
          marginBottom: 20,
          fontSize: '2rem',
        },
      },

      '@media (min-width: 860px)': {
        gridRow: '2 / 3',
        '& .switch': {
          marginBottom: 20,
          fontSize: '3rem',
        },
      },

      '& span': { paddingLeft: 14 },
      '& .icon ': { paddingLeft: 14 }
    },
  },

}

// // whatever is returned will show up as props
// const mapStateToProps = (state, ownProps) => {
//   return {
//     userTopics: state.userTopics
//   }
// }
//
// // anything returned from here will end up as props on component
// // whenever fetchUserTopics is called the result should be passed to all reducers
// const mapDispatchToProps = (dispatch, ownProps) => {
//   // return bindActionCreators({fetchUserTopics}, dispatch);
//   return {
//     fetchUserTopics: query => { dispatch(fetchUserTopics(query)) }
//   }
// }
const mapDispatchToProps = {fetchUserTopics}

//
// // connect takes a function and component and produces a container that is aware
// of state contained by redux
// promote BlogList to Container

export default injectSheet(profileStyles)(connect(null, mapDispatchToProps)(ProfileComponent));
