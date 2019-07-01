import React from 'react'
import ReactDOM from 'react-dom'
import injectSheet, { jss } from 'react-jss'
import ScrollToTopOnMount from '../../utils/ScrollToTopOnMount'
import { List, Avatar, Button, Skeleton } from 'antd';
import axios from "axios";

const count = 3;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat&noinfo`;
//import colors from '../../styles/colors'

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
          style={{
            textAlign: 'center',
            marginTop: 12,
            height: 32,
            lineHeight: '32px',
          }}
        >
          <Button onClick={this.onLoadMore}>loading more</Button>
        </div>
      ) : null;
    return (
      <React.Fragment>
        <ScrollToTopOnMount />
        <section id="proposal" className={classes.proposals}>
          <div id="proposal-blurb">
            <div id="proposal-blurb-intro">
              <h1>Proposals</h1>
              <p>
                Proposals are a way for our ecosystem to sprout the seeds of what it is to become. They are the guiding light
                to prosperity and opportunity for the next generations of entrepreneurs, hackers, financiers.
              </p>
            </div>

            <div id="proposal-blurb-features">
              <h5 id="proposal-blurb-how">How to participate:</h5>
              <ol id="proposal-blurb-how-list">
                <li>Submit features.</li>
                <li>Find features relevent to your activities</li>
                <li>Upvote features submitted by the community for inclusion in our RIFS program (rapid implementation feasibility study).</li>
              </ol>
            </div>

            <div id="proposal-blurb-guide">
              <h6 id="proposal-blurb-title" className="subtitle-small">
                Guidelines
              </h6>
              <ol id="proposal-blurb-guide-list">
                <li>Submit features.</li>
                <li>Find features relevent to your activities</li>
                <li>Upvote features submitted by the community for inclusion in our RIFS program (rapid implementation feasibility study).</li>
              </ol>
            </div>

          </div>
          <div id="proposal-items" className={classes.proposalItems}>
            <div id="proposal-items-heading">
              <h3>Community Proposals</h3>
            </div>
            <div className="proposal-column">
              <List
                className="demo-loadmore-list"
                loading={initLoading}
                itemLayout="horizontal"
                loadMore={loadMore}
                dataSource={list}
                renderItem={item => (
                  <List.Item actions={[<a>edit</a>, <a>more</a>]}>
                    <Skeleton avatar title={false} loading={item.loading} active>
                      <List.Item.Meta
                        avatar={
                          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                        }
                        title={<a href="https://ant.design">{item.name.last}</a>}
                        description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                      />
                      <div>content</div>
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
    gridTemplateColumns: '35vw 65vw',
    gridTemplateAreas: '"sidebar content"',

    '@media (max-width: 576px)': {
      gridTemplateColumns: '100vw 100vw',
      gridTemplateAreas: '"sidebar" "content"'
    },

    '@media (min-width: 576px and max-width: 992px)': {
      gridTemplateColumns: '35vw 65vw',
      gridTemplateAreas: '"sidebar content"'
    },

    '@media (min-width: 992px)': {
      gridTemplateColumns: '35vw 54vw',
      gridTemplateAreas: '"sidebar content"'
    },

    '& #proposal-blurb': {
      gridArea: 'sidebar',
      maxWidth: '60ch',
      padding: [0, 0, 0, 65],

      '& #proposal-blurb-intro': {
        maxWidth: '60ch',
      },


      '& #proposal-blurb-features': {
        padding: [10, 0, 0, 0],

        '& #proposal-blurb-features-title': {
          padding: [0,0,0,0]
        },

        '& #proposal-blurb-how-list': {
          padding: [0,0,0,40]
        }
      }
    }

  },

  proposalItems: {
    gridArea: 'content',
    backgroundColor: '#ffffff',

    '& #proposal-items-heading': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      // position: 'fixed',
      height: 50,
      border: '1.2px solid #000000',
      fontWeight: '400',
      zIndex: 10,
      // backgroundColor: '#D0E5FF',
      color: '#000',

      '@media (min-width: 992px)': {
        width: '55vw',
      },


    },

    '& ul.proposal-column': {
      '& li': {
        display: 'block',
        listStyleType: 'none',
        padding: [10, 20, 10, 20],
        border: '1px solid #727d88',
      }
    }
  }
}

export default injectSheet(proposalStyles)(ProposalComponent)
