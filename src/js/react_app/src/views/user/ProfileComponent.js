import React from 'react'
import ReactDOM from 'react-dom'
import {
  Link,
  withRouter
} from "react-router-dom";
import injectSheet, { jss } from 'react-jss'
import ScrollToTopOnMount from 'Utils/ScrollToTopOnMount'
import { api_url } from 'Utils/consts'
// import NewProfileForm from './NewProfileForm'
import { Icon, Switch } from 'antd';
import axios from "axios";
import { connect } from "react-redux";
// import userProfileCreate from "Actions/userProfileCreate";
import colors from "Styles/colors"
// import Cookies from 'universal-cookie';
// import setAuthToken from 'Services/auth/setAuthToken'


class ProfileComponent extends React.Component {
  state = {
    initLoading: true,
    loading: false,
    data: [],
    list: [],
    page: 1,
    ModalContent: '',
    visible: false,
    confirmLoading: false
  };

  componentDidMount() {
    // this.getData(res => {
    //   this.setState({
    //     initLoading: false,
    //     data: res.data,
    //     list: res.data,
    //     page: this.state.page + 1
    //   });
    // });
  }

  postData = data => {
    const url = `${api_url}/user_profiles`
    const profileData = {
      withCredentials: true,
      data: data
    };

    // const cookies = new Cookies();
    // const sessionToken = cookies.get('_cw_skey')
    // const accessToken = cookies.get('_cw_acc')
    // setAuthToken(accessToken) // set token in requests

    axios.post(url, data).then((res) => {
      callback(res.data)
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
    this.postData({role: role, is_role: bool})
  }

  render() {
    const { classes } = this.props
    const { initLoading, loading, list, visible, confirmLoading, ModalContent } = this.state;
    return (
      <div className="dark-wrap">
        <React.Fragment>
          <ScrollToTopOnMount />

          <section id="profile" className={classes.profiles}>
            <div id="profile-blurb">
              <div id="profile-blurb-intro">
                <h3 id="blurb-title">HyperDisruptor Profile</h3>
                <h4 id='blurb-subtitle' className='subtitle-small'>
                  Self-select your current roles within the ecosystem. The Site
                  adapts to your chosen roles and exploration will progress your
                  skills. We recommend starting as a Data Curator of FDS
                  (Financial Data Structures). Once mastery is attained,
                  self-select into Strategist or Machine Learning Financial
                  Engineer to exploit your acquired wisdom and talents.
                </h4>
                {/* <p>
                  <Link to="/roadmap">The Roadmap</Link> includes team formation with tools and systems.
                </p> */}
              </div>
            </div>

            <div id="profile-items" className={classes.profileItems}>
              <div className="profile-items-heading">
                <h3>My Core Capabilities</h3>
              </div>

              <div className="profile-column">
                <div className='switch'>
                  <Switch
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
                    name="strategist"
                    ref="strategist"
                    onChange={e => this.onChange("strategist", e)}
                    checkedChildren={<Icon type="check" />}
                    unCheckedChildren={<Icon type="close" />}
                  />
                  <Icon className='icon' type="bar-chart" /><span>Strategist</span>
                </div>
                <div className='switch'>
                  <Switch
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
    gridAutoFlow: 'row',

    '@media (max-width: 860px)': {
      gridTemplateColumns: '100vw 100vw',
      gridTemplateAreas: '"sidebar" "content"',
    },

    '@media (min-width: 860px)': {
      gridTemplateColumns: '2fr 8fr',
      gridTemplateAreas: '"sidebar content"',
    },

    '& #profile-blurb': {
      gridArea: 'sidebar',
      maxWidth: '60ch',
      margin: '100px 0 0 0',
      padding: 14,

      // color: `${colors.sand} !important`,

      '@media (max-width: 860px)': {
        // maxWidth: '40vw',

        '& #blurb-title': {
          fontSize: '2rem',
        },
      },

      '@media (min-width: 860px)': {
        position: 'fixed',
        maxWidth: '40vw',
      },

      '& #profile-blurb-intro': {
        fontSize: 13,
        maxWidth: '40vw',

        '& #blurb-title': {
          fontSize: '2.7rem !important',
          color: `${colors.offWhite} !important`,
        },
        '& #blurb-subtitle': {
          maxWidth: '60ch',
          color: `${colors.offWhite} !important`,
          marginBottom: 10,
        }
      },
    },
  },

  profileItems: {
    gridArea: 'content',

    '@media (max-width: 860px)': {
      padding: 14,

    },

    '@media (min-width: 860px)': {
      margin: '90px 0px 50px 0',
      justifySelf: 'center',
    },

    '& #profile-items-heading': {
      alignItems: 'center',
      justifyItems: 'center',
      height: 55,
      zIndex: 10,
      marginBottom: 10,
      color: '#fff !important',
      background: `${colors.primaryDark}`,
      '-webkit-perspective': 1000,
      '-webkit-backface-visibility': 'hidden',
      '& h3': {
        gridColumn: '2',
        justifySelf: 'start',
        fontSize: '2.0rem',
        letterSpacing: '0.5rem',
        paddingTop: 17,
        color: '#fff',
      },
    },

    '& .profile-column': {
      fontSize: 15,
      color: `${colors.offWhite} !important`,
      '& .switch': {
        marginBottom: 15,
        fontSize: 15,
      },
      '& span': { paddingLeft: 10 },
      '& .icon ': { paddingLeft: 10 }
    },
  },

}

export default injectSheet(profileStyles)(ProfileComponent)
