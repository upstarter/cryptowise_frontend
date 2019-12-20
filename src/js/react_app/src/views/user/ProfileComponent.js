import React from 'react'
import ReactDOM from 'react-dom'
import {
  Link,
  withRouter
} from "react-router-dom";
import injectSheet, { jss } from 'react-jss'
import ScrollToTopOnMount from 'Utils/ScrollToTopOnMount'
import { api_url } from 'Utils/consts'
import { Icon, Switch } from 'antd';
import axios from "axios";
import { connect } from "react-redux";
import AuthService from 'Services/auth/AuthService'
import colors from "Styles/colors"

class ProfileComponent extends React.Component {
  state = {
    initLoading: true,
    loading: false,
    roleData: [],
    list: [],
    page: 1,
    ModalContent: '',
    visible: false,
    confirmLoading: false
  };

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
      console.log('res', res.data.data)
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

  handleCreate = () => {

    this.setState({
      ModalContent: 'The modal will be closed after two seconds',
      confirmLoading: true,
    });

    const { form } = this.formRef.props;
    form.validateFields((err, values) => {
      if (err) {
        console.error('handleCreate error', err)
        return;
      }
      this.props.dispatch(userProfileCreate(values))
    });
    form.resetFields();
    this.setState({ visible: false, confirmLoading: false })
  }

  handleCancel = () => {
    console.log('Clicked cancel button');
    this.setState({
      visible: false,
    });
  }

  onChange = (role, bool) => {
    // e.preventDefault();
    // e.stopPropagation();
    console.log(role, bool)
    const auth = new AuthService
    let id = auth.getProfileId()
    let data = {role: {user_id: id, role: role, is_role: bool}}
    this.postData(data)
  }

  render() {
    const { classes } = this.props
    const { initLoading, loading, roleData, visible, confirmLoading, ModalContent } = this.state;
    return (
      <div className="dark-wrap">
        <React.Fragment>
          <ScrollToTopOnMount />

          <section id="profile" className={classes.profiles}>
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
    gridTemplateRows: '1fr 1fr',
    gridTemplateAreas: '"header" "content"',
    justifyItems: 'center',

    '& #profile-blurb': {
      gridArea: 'header',
      maxWidth: 600,
      margin: '80px 0 0 0',

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
          fontSize: '1.7rem !important'
        },
      },
    },
  },

  profileItems: {
    gridArea: 'content',
    marginTop: 50,

    '@media (max-width: 860px)': {
      gridRow: '2 / 3',
    },

    '@media (min-width: 860px)': {
      gridRow: '2 / 3',
    },

    '& .profile-items-heading': {
      textAlign: 'center',
      height: 55,
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

export default injectSheet(profileStyles)(ProfileComponent)
