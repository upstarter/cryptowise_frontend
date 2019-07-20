import React from 'react'
import ReactDOM from 'react-dom'
import injectSheet, { jss } from 'react-jss'
import ScrollToTopOnMount from '../../utils/ScrollToTopOnMount'
import { List, Avatar, Button, Skeleton, Affix, Rate, Icon, Typography, Divider } from 'antd';
const { Title, Paragraph, Text } = Typography;
import axios from "axios";

const count = 3;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat&noinfo`;
// import colors from '../../styles/colors'

class ProposalComponent extends React.Component {
  state = {
    initLoading: true,
    loading: false,
    data: [],
    list: [],
  };

  componentDidMount() {
    this.getData(res => {
      this.setState({
        initLoading: false,
        data: res.results,
        list: res.results,
      });
    });
  }

  getData = callback => {
    axios.get(fakeDataUrl).then((res) => {
      console.log(res)
        callback(res.data)
    })
  };

  onLoadMore = () => {
    this.setState({
      loading: true,
      list: this.state.data.concat([...new Array(count)].map(() => ({ loading: true, name: {} }))),
    });
    this.getData(res => {
      const data = this.state.data.concat(res.results);
      console.log('YOOO', data)
      this.setState(
        {
          data,
          list: data,
          loading: false,
        },
        () => {
          // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
          // In real scene, you can using public method of react-virtualized:
          // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
          window.dispatchEvent(new Event('resize'));
        },
      );
    });
  };

  render() {
    const { classes } = this.props
    const { initLoading, loading, list } = this.state;
    const loadMore =
      !initLoading && !loading ? (
        <div
          id='load-more-button'
          style={{
            textAlign: 'center',
            marginTop: 12,
            height: 32,
            lineHeight: '32px',
          }}
        >
          <Button onClick={this.onLoadMore}>Load More</Button>
        </div>
      ) : null;
    return (
      <React.Fragment>
        <ScrollToTopOnMount />
        <section id="proposal" className={classes.proposals}>
          <div id="proposal-blurb">
            <Typography className='blurb-typography'>
              <div id="proposal-blurb-intro">
                <Title>Proposals</Title>
                <Paragraph>
                  Proposals are a way for our ecosystem to sprout the seeds of
                  what it is to become over the long term. They are the guiding north
                  star to prosperity and opportunity for the next generations of hackers, fin-repreneurs, and financiers.
                </Paragraph>
              </div>

              <div id="proposal-blurb-features">
                <h5 id="proposal-blurb-how">How to participate:</h5>
                <ol id="proposal-blurb-list">
                  <li>Submit and find features relevent to your goals & activities</li>
                  <li>Claim features relevent to your goals & activities and implement as API endpoints for RIFF awards</li>
                  <li>Upvote features submitted by the community for inclusion in our RIFFS program (rapid implementation feasibility & fundability study).</li>
                </ol>
              </div>
            </Typography>
          </div>

          <div id="proposal-items" className={classes.proposalItems}>
            <Affix offsetTop={64}>
              <div id="proposal-items-heading">
                <h3>RIFF Proposals</h3>
              </div>
            </Affix>
            <div className="proposal-column">
              <List
                className="loadmore-list"
                loading={initLoading}
                itemLayout="vertical"
                loadMore={loadMore}
                dataSource={list}
                renderItem={item => (
                  <List.Item actions={[<a>save</a>,<a>more</a>,<a>edit</a>]}>
                    <Skeleton avatar title={false} loading={item.loading} active>
                      <List.Item.Meta
                        avatar={
                          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                        }
                        title={<a href="https://ant.design">{item.name.last}</a>}
                        description="RIFF, a proposal language for analytical crypto-networking applications, refined by the CryptoWise Team"
                      />
                      <div className='ant-list-item-foot'>
                        <h6 className='sub-title'>Your Rating</h6>
                        <Rate allowHalf />
                      </div>
                    </Skeleton>
                  </List.Item>
                )}
              />
            </div>
          </div>
        </section>
      </React.Fragment>
    )
  }
}

const proposalStyles = {
  proposals: {
    display: 'grid',
    backgroundColor: '#fff',

    gridTemplateColumns: '30vw 70vw',
    gridTemplateAreas: '"sidebar content"',

    '@media (max-width: 880px)': {
      gridTemplateColumns: '100vw 100vw',
      gridTemplateAreas: '"sidebar" "content"'
    },

    '@media (min-width: 880px)': {
      gridTemplateColumns: '30vw 70vw',
      gridTemplateAreas: '"sidebar content"'
    },

    '& #proposal-blurb': {
      gridArea: 'sidebar',
      margin: '0 auto 30px',
      maxWidth: '60ch',
      padding: 14,
    }
  },

  proposalItems: {
    gridArea: 'content',
    backgroundColor: '#fff',

    '& #proposal-items-heading': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: 40,
      backgroundColor: '#813772',
      color: '#fff',
    },

    '& .loadmore-list': {
      minHeight: 350
    },

    '& #load-more-button': {
      margin: [0,0,20,0]
    },

    '@media (max-width: 880px)': {
        '& .ant-list-item': {
          maxWidth: '90vw',
          margin: '0 auto',
          padding: 20,

          '& .ant-list-item-meta': {
            maxWidth: '90vw',
            margin: '0 auto',
            padding: 10
          },

          '& .ant-list-item-foot': {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            maxWidth: '50vw',
            margin: '0 auto',
          },

          '& .ant-list-item-action': {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }
        },
    },


  },
}

export default injectSheet(proposalStyles)(ProposalComponent)
