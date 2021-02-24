// import React from 'react'
// import ReactDOM from 'react-dom'
// import { Link, NavLink, Route, Switch, withRouter } from 'react-router-dom';
// import injectSheet, { jss } from 'react-jss'
// import ScrollToTopOnMount from 'Utils/ScrollToTopOnMount'
// import { api_url, url } from 'Utils/consts'
// import NewTopicForm from './NewTopicForm'
// import { List, Avatar, Image, Button, Skeleton, Affix, Rate, Typography, Divider, Modal } from 'antd';
// const { Title, Paragraph, Text } = Typography;
// import axios from "axios";
// import { connect } from "react-redux";
// import { createProposal } from "Redux/topics";
// import colors from "Styles/colors"
// import Cookies from 'universal-cookie';
// import setAuthToken from 'Services/auth/setAuthToken'
// import { TeamOutlined } from '@ant-design/icons';
//
// const count = 25;
// const fakeDataUrl = `//randomuser.me/api/?results=${count}&inc=name,gender,email,nat&noinfo`;
//
// class TokenDetail extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//
//   render() {
//     let { token, classes } = this.props;
//     const { children, description, name, id } = token;
//
//     return (
//       <div className={classes.token}>
//         <div className={classes.tokenDescription}>{description}</div>
//         <div className={classes.tokenDetails}>
//           <div className={classes.tokenActions}>
//             <Button className={classes.actionButton} href={`${url}/tokens/${id}`} type="secondary">
//               View {name}
//             </Button>
//             <Button className={classes.actionButton} href={`${url}/discuss/tokens/${id}`} type="secondary">
//               Discuss {name}
//             </Button>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
//
// const tokenDetailStyles = {
//   token: {},
//   tokenActions: {
//   },
//   actionButton: {
//     marginRight: 5
//
//   },
//   tokenDescription: {
//     color: colors.silver8,
//     padding: [3,0,13,0],
//   },
//   tokenDetails: {},
// };
//
// TokenDetail = injectSheet(tokenDetailStyles)(TokenDetail);
//
// class TopicChildren extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//
//       data: [],
//       list: this.props.topic,
//       page: 1,
//       ModalContent: 'Customize your experience',
//       visible: false,
//       confirmLoading: false,
//       topic: props.topic,
//       topicID: props.topicID
//     }
//   }
//
//   componentDidMount() {
//     console.log('ppp', this.props)
//     this.setState({
//       initLoading: this.props.initLoading,
//       loading: this.props.loading,
//     })
//
//   }
//
//
//   topicHead = (topic, lvl, data=``) => {
//     let href = `/discuss/topics/${topic.id}`
//
//     if (lvl === 0) {
//       data += `<h2 class='topic-heading'><a style='user-select:none;margin-left: 6px;color: ${colors.lightBlack};font-size: 23px;font-weight: 300;' href='${href}'>${this.discussTopic(topic,lvl)}</a></h2>`
//     } else if (lvl === 1) {
//       data += `<h2 class='topic-heading'><a style='user-select:none;margin-left: 6px;color: ${colors.lightBlack};font-size: 28px;font-weight: 300;' href='${href}'>${this.discussTopic(topic,lvl)}</a></h2>`
//     } else if (lvl === 2) {
//       data += `<h3 class='topic-heading'><a style='user-select:none;margin-left: 8px;color: ${colors.mediumBlack};font-size: 25px;font-weight: 100' href='${href}'>${this.discussTopic(topic,lvl)}</a></h3>`
//     } else if (lvl === 3) {
//       data += `<h4 class='topic-heading'><a style='user-select:none;margin-left: 11px;color: ${colors.mediumBlack};font-size: 25px;font-weight: 0' href='${href}'>${topic.name}</a></h4>`
//     } else {
//       data += `<h6 class='topic-heading'><a style='user-select:none;margin-left: 14px;color: ${colors.darkBlack};font-size: 25px; font-weight: 0;' href='${href}'>${topic.name}</a></h${lvl}>`
//     }
//     // return (
//     //   <section className={classes.topicHead}>
//     //
//     //   </section>
//     // )
//     return data
//   }
//
//   topicChildren = (topicId, children, lvl=0, data=`<div class='child'>`) => {
//     if (children === undefined) { return data }
//     if (children.length === 0) { return data }
//     if (lvl > 0) { return data }
//
//     children.map((pair, idx) => {
//       if (pair.length === 0) { return data }
//       let parent = pair[0]
//       // if (parent.parent_id === topicId) {lvl = 0}
//       let childs = pair[1]
//       if (parent === undefined) { return data }
//       data += this.topicHead(parent, lvl)
//
//       data += `<div class='topic-details' style='user-select:none;'>${this.topicDetail(parent)}</div>`
//       data += `<ul style='user-select:none;list-style-type:none;text-decoration:none;' id='topic-urls'>
//                 ${childs.map((children) => {
//                   return `<li class='discuss-link' style='text-indent: -10px;padding: 7px'>${this.discussTopic(children[0], lvl, children[1])} – ${children[0].description}</li>`
//                 }).join(``)}
//                </ul>`
//       if (childs.length > 0) {
//         lvl += 1
//
//         data += this.topicChildren(topicId, childs, lvl=lvl)
//       }
//     })
//
//     return data + `</div>`
//   }
//
//
//   titleize = (token) => {
//     token.replace("ww*g", (txt) => {
//       return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
//     });
//     this.setState({ token: token });
//   };
//
//   tokenDescription = (token) => {
//     return <TokenDetail token={token} />;
//   };
//
//   tokenTitle = (token, classes) => {
//     return (
//       <div>
//         <a className={classes.tokenName} href={`/tokens/${token.id}`}>
//           {token.name}
//         </a>
//       </div>
//     );
//   };
//
//   avatar = (token, classes) => {
//     let re = /\(.*\)/
//     let symbol = token.name.match(re)
//     if (symbol) {
//       let imgUrl = require(`./crypto-logos/${symbol[0].replace('(','').replace(')', '').toLowerCase()}.png`)
//       //
//       const tokenImg = (
//         <Image
//           src={imgUrl}
//           className={classes.img}
//         />
//       );
//
//       return <Avatar size="large" src={tokenImg} icon={<TeamOutlined />} />;
//     }
//   };
//
//   render() {
//     let { topic, classes } = this.props
//     const {
//       topicID,
//       initLoading,
//       loading,
//       list,
//       visible,
//       confirmLoading,
//       ModalContent,
//     } = this.state;
//     console.log('after list', initLoading)
//     const loadMore =
//       !initLoading && !loading ? (
//         <div
//           id="load-more-button"
//           style={{
//             textAlign: "center",
//             marginTop: 12,
//             height: 32,
//             lineHeight: "32px",
//           }}
//         >
//           <Button onClick={this.onLoadMore}>Load More</Button>
//         </div>
//       ) : null;
//     // return (
//     //   <div className={classes.topic}>
//     //     <section className={classes.topicHead}>
//     //       <span className={classes.topicName}>
//     //         Discuss {topic && topicID === 'strategy' ? "Strategy" : topic.name }
//     //       </span>
//     //       <span className={classes.topicDescription}>
//     //         {topic && topic.description}
//     //       </span>
//     //     </section>
//     //     <div className={classes.topicDetails}
//     //       dangerouslySetInnerHTML={{__html: this.topicChildren(topic.id, topic.children)}}
//     //     >
//     //     </div>
//     //   </div>
//     // )
//
//     return (
//       <div className="dark-wrap">
//         <React.Fragment>
//           <ScrollToTopOnMount />
//
//           <section id="token" className={classes.tokens}>
//             <div id="token-items" className={classes.tokenItems}>
//               <div className={classes.tokenColumn}>
//                 <List
//                   className="item-list"
//                   loading={initLoading}
//                   itemLayout="horizontal"
//                   loadMore={loadMore}
//                   dataSource={topic}
//                   renderItem={(item) => (
//                     // <List.Item actions={[<a>more</a>]}>
//                     <List.Item>
//                       <Skeleton
//                         avatar
//                         title={false}
//                         loading={item.loading}
//                         active
//                       >
//                         <List.Item.Meta
//                           id="list-item-meta"
//                           avatar={this.avatar(item, classes)}
//                           title={this.tokenTitle(item, classes)}
//                           description={this.tokenDescription(item)}
//                         />
//                         {
//                           // <div id="meta-details">
//                           //   <p className='item-name'>{item.name}</p>
//                           //   <p className='item-description'>{item.description}</p>
//                           // </div>
//                         }
//                       </Skeleton>
//                     </List.Item>
//                   )}
//                 />
//               </div>
//             </div>
//           </section>
//         </React.Fragment>
//       </div>
//     );
//   }
// }
//
// let topicChildrenStyles = {
//   topic: {
//     marginTop: 20,
//     '& .child': {
//       maxWidth: '95vw',
//
//       margin: '0 auto',
//       display: 'flex',
//       flexDirection: 'column',
//       justifyContent: 'center',
//       alignItems: 'center',
//     },
//     '& .topic-heading': {
//       '& a': {
//         fontSize: '24px !important'
//       },
//     },
//     '& .topic-details': {
//
//     },
//     '& .discuss-link': {
//       marginLeft: 15,
//       color: `${colors.silver8}`,
//     },
//     '& .topic-detail-description': {
//       color: colors.silver8,
//       fontWeight: 445,
//     },
//     '& .discuss-topic': {
//       marginTop: 27,
//       fontSize: 17,
//       color: `${colors.antBlue} !important`,
//     }
//   },
//   discuss: {
//     margin: [0,0,0,0],
//
//     "@media (max-width: 408px)": {
//
//     },
//     "@media (min-width: 408px)": {},
//   },
//   topicHead: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     // background: colors.silver2,
//   },
//   topicName: {
//     fontSize: '2.45rem !important',
//     color: colors.silver,
//     maxWidth: '400px',
//     "@media (max-width: 408px)": {
//       fontSize: '1.5rem !important',
//       padding: 5,
//     },
//   },
//   topicDescription: {
//     color: colors.silver6,
//     maxWidth: '60ch',
//     marginBottom: 5,
//     "@media (max-width: 408px)": {
//       marginLeft: 15,
//     },
//     "@media (min-width: 408px)": {},
//   },
//   topicDetails: {
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     margin: '20px auto',
//     maxWidth: '60ch',
//
//   }
// }
//
// TopicChildren = injectSheet(topicChildrenStyles)(TopicChildren)
//
// class TopicContainer extends React.Component {
//   constructor(props) {
//     super(props)
//
//     this.state = {
//       initLoading: true,
//       loading: false,
//       topic: this.props.topic,
//       topicID: this.props.match.params.topicID,
//       data: [],
//       list: [],
//       page: 1,
//       key: '',
//       ModalContent: 'Customize your experience',
//       visible: false,
//       confirmLoading: false
//     };
//   }
//
//
//   componentDidMount() {
//     const { match } = this.props
//     this.getData(res => {
//       console.log('res',res)
//       let list = res.data[1].map((pair) => { return pair[0] })
//       console.log('befor list', list)
//       res.data[0].children = res.data[1]
//       this.setState({
//         initLoading: false,
//         data: res.data,
//         list: list,
//         page: this.state.page + 1
//       });
//     });
//
//   }
//
//   getData = callback => {
//     const { topicID } = this.state
//     console.log('state', this.state)
//     let re = /\d+$/
//     let found = topicID && topicID.match(re)
//
//     let url
//
//     if (topicID === 'discuss') {
//       url = `${api_url}/economics?per_page=${count}&page=${this.state.page}`
//     } else if (topicID === 'assets') {
//       url = `${api_url}/topics/193?per_page=${count}&page=${this.state.page}`
//     } else {
//       url = `${api_url}/${topicID}?per_page=${count}&page=${this.state.page}`
//     }
//
//     if (found) {
//       url = `${api_url}/topics/${topicID}?per_page=${count}&page=${this.state.page}`
//     }
//     console.log('url', url)
//     // const data = {
//     //   withCredentials: true,
//     //   credentials: 'include'
//     // };
//     //
//     // const cookies = new Cookies();
//     // const accessToken = cookies.get('_cw_acc')
//     // setAuthToken(accessToken) // set token in requests
//     //
//     // axios.get(url, data).then((res) => {
//     //   callback(res.data)
//     // })
//
//
//     axios.get(url).then((res) => {
//       callback(res.data)
//     })
//   };
//
//   onLoadMore = () => {
//     this.setState({
//       loading: true,
//       list: this.state.data.concat([...new Array(count)].map(() => ({ loading: true, name: {} }))),
//     });
//     this.getData(res => {
//       const data = this.state.data.concat(res.data);
//       const page = this.state.page + 1
//
//       this.setState(
//         {
//           data,
//           list: data,
//           loading: false,
//           page: page,
//         },
//         () => {
//           // Resetting windows offsetTop so as to display react-virtualized demo underfloor.
//           // In real scene, you can using public method of react-virtualized:
//           // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
//           window.dispatchEvent(new Event('resize'));
//         },
//       );
//     });
//   };
//
//   showModal = () => {
//     this.setState({
//       visible: true,
//     });
//   }
//
//   saveFormRef = formRef => {
//     this.formRef = formRef;
//   };
//
//   handleCreate = () => {
//
//     this.setState({
//       ModalContent: 'The modal will be closed after two seconds',
//       confirmLoading: true,
//     });
//
//     const { form } = this.formRef.props;
//     form.validateFields((err, values) => {
//       if (err) {
//         console.error('handleCreate error', err)
//         return;
//       }
//       this.props.dispatch(createTopic(values))
//     });
//     form.resetFields();
//     this.setState({ visible: false, confirmLoading: false })
//   }
//
//   handleCancel = () => {
//     console.log('Clicked cancel button');
//     this.setState({
//       visible: false,
//     });
//   }
//
//   titleize = (topic) => {
//     topic.replace('\w\w*\g', (txt) => {
//             return txt.charAt(0).toUpperCase() +
//             txt.substr(1).toLowerCase()
//           })
//     this.setState({topic: topic})
//   }
//
//   topicDescription = (topicList, topicID) => {
//
//     return (
//       <TopicChildren topic={topicList} topicID={topicID} />
//     )
//   }
//
//   render() {
//     let { classes, topic } = this.props
//     let { topicID } = this.state
//     console.log('render topic', topic)
//     // topic = topic.split(" ").map((txt) => {
//     //   return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase() + ' '
//     // })
//     const { initLoading, loading, visible, list, confirmLoading, ModalContent } = this.state;
//     console.log('before render list', initLoading)
//     const loadMore =
//       !initLoading && !loading ? (
//         <div
//           id='load-more-button'
//           style={{
//             textAlign: 'center',
//             marginTop: 12,
//             height: 32,
//             lineHeight: '32px',
//           }}
//         >
//           <Button onClick={this.onLoadMore}>Load More</Button>
//         </div>
//       ) : null;
//     return (
//       <div className="dark-wrap">
//         <React.Fragment>
//           <ScrollToTopOnMount />
//
//           <section id="topic" className={classes.topics}>
//             <div id="topic-items"
//                  className={classes.topicItems}
//             >
//               <div className="item-list">
//                 {this.topicDescription(list, topicID)}
//               </div>
//             </div>
//           </section>
//         </React.Fragment>
//       </div>
//
//     )
//   }
// }
//
// const topicStyles = {
//   modal: {
//     // width: 10,
//     // background: `${colors.secondaryDark}`,
//     filter: 'invert(0)',
//     '& .ant-modal-content': {
//       color: 'red !important',
//       textDecoration: 'none !important',
//     }
//   },
//   topic: {
//
//   },
//   topicHeader: {
//
//   },
//   topics: {
//     display: 'grid',
//     marginTop: 50,
//
//
//     '@media (max-width: 860px)': {
//       gridTemplateRows: 'auto 1fr',
//       gridTemplateAreas: '"header" "content"',
//     },
//
//     '@media (min-width: 860px)': {
//       gridTemplateColumns: '1fr',
//       padding: 10,
//       gridTemplateAreas: '"header content"',
//     },
//
//     '@media (min-width: 860px)': {
//       gridColumn: '1 / 2',
//       maxWidth: '96vw',
//     },
//
//   },
//
//   topicItems: {
//     gridArea: 'content',
//     width: '100vw',
//
//     '@media (max-width: 860px)': {
//       gridRow: '2 / 3',
//       justifySelf: 'center',
//       margin: '0px auto'
//
//     },
//     '@media (min-width: 860px)': {
//       justifySelf: 'center',
//       margin: '0px auto',
//     },
//
//     '& #topic-items-heading': {
//       display: 'grid',
//       zIndex: 10,
//       // minHeight: 70,
//       // paddingTop: 20,
//       background: `${colors.primaryDark}`,
//       '-webkit-perspective': 1000,
//       '-webkit-backface-visibility': 'hidden',
//
//       '& .float:hover': {
//         '-webkit-animation': 'none'
//       },
//
//       '& .float': {
//         gridColumn: '3',
//         gridRow: '1 / 3',
//         justifySelf: 'end',
//         margin: [0, 22, 0, 0],
//         backgroundColor: `${colors.darkBlack}`,
//         color: '#FFF',
//         borderRadius: 50,
//         textAlign: 'center',
//         cursor: 'pointer',
//         zIndex: 10,
//         border: 'none',
//         boxShadow: `0 0 0 0 ${colors.darkBlack}`,
//         '-webkit-animation': 'pulse 1.5s infinite',
//       },
//     },
//
//     '& .item-list': {
//
//       color: `${colors.offWhite} !important`,
//
//       '& .topic-description': {
//         margin: [0,0,0,0],
//         color: `${colors.smoke4}`,
//
//         '& .topic-name': {
//           color: colors.silver
//         },
//
//         '& .description': {
//           margin: [0,0,0,0],
//           color: `${colors.silver6}`
//         },
//
//         '& .topic-detail': {
//
//           '& .topic-detail-description': {
//             color: `${colors.silver8}`,
//           }
//
//         }
//       },
//
//     },
//   },
//
// }
// const TopicContainerWithRouter = withRouter(TopicContainer)
//
// export default connect(null, null)(injectSheet(topicStyles)(TopicContainerWithRouter));