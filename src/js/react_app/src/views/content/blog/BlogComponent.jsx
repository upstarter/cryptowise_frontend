import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from "react-router-dom"
import {url} from 'Utils/consts'
import injectSheet, { jss } from "react-jss"
import { Row, Col } from 'antd'
import colors from 'Styles/colors'

class BlogComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      blogPosts: [],
      selectedPost: null,
      isLoading: true,
      error: null
    };
  }


  componentDidMount() {

      this.setState({ isLoading: true });

      fetch(`${url}/v1/blog_posts`)
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Something went wrong ...');
          }
        })
        .then(data => this.setState({
          blogPosts: data.blog_posts,
          selectedPost: data.blog_posts[0],
          isLoading: false
        }))
        .catch(error => this.setState({ error, isLoading: false }));
  }

  render() {
    const { blogPosts, isLoading, error } = this.state;
    const { classes } = this.props;

    if (error) {
      return <p>{error.message}</p>;
    }

    if (isLoading) {
      return (
        <React.Fragment>
          <section id="blog" className={classes.blog, 'dark-wrap'}>
            <div className={classes.card, "is-loading"}>
              <div className="card-content">
                <div className="content"></div>
              </div>
            </div>
          </section>
        </React.Fragment>
      )
    }

    return (
      <React.Fragment>
        <section id="blog" className={classes.blog, 'dark-wrap'}>
          <div className={classes.heading}>
            <h1>Blog Posts</h1>
          </div>
          <div className={classes.blogPosts}>
            <Row type="flex" justify="space-around">
              {blogPosts.map(post =>
                <Col key={post.link} xs={25} sm={25} md={7} lg={7} xl={7}>
                  <div key={post.link} className={classes.card}>
                    <div className="card-content" className={classes.card_content}>
                      <p id="date" className="caption" dangerouslySetInnerHTML={{__html: post.date}}>
                      </p>
                      <div className="card-subtitle" dangerouslySetInnerHTML={{__html: post.content}}>
                      </div>
                      <a href={post.link} className="link">Read More</a>
                    </div>
                  </div>
                </Col>
              )}
            </Row>
          </div>
        </section>
      </React.Fragment>
    )
  }
}
const blogStyles = {
  blog: {
    padding: '3rem',
    margin: '-10 auto',
    background: '#191F2D',
    color: '#fff',
    '& a': { background: 'none !important' }
  },
  blogPosts: {
    '@media (min-width: 992px)': {
      // width: '60vw',
      // margin: '0 auto',
    }
  },
  heading: {
    textAlign: 'center',

    marginBottom: '10px',
    '& h1': {
      color: `${colors.white}`
    }
  },
  card: {
    // maxWidth: '50ch',
    marginBottom: 70,
    minHeight: '100%',

    '@media (max-width: 808px)': {
      // maxWidth: '50ch'
    },

    '@media (min-width: 992px)': {
       // maxWidth: '60ch'
    },



    '.content .is-loading': {
      minHeight: '100vh',

      '&:after': {
        // '@include': 'loader',
        position: 'absolute',
        top: 'calc(25% - 2.5em)',
        left: 'calc(50% - 2.5em)',
        width: '5em',
        height: '5em',
        borderWidth: '0.25em',
      }
    },
  },
  card_content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    // '& .caption': {
    //   display: 'flex',
    //   textAlign: 'center !important',
    //   alignItems: 'center',
    // },
    // '& .link': {
    //   display: 'flex',
    //   textAlign: 'center !important',
    //   alignItems: 'center'
    // },
    '& h1': {
      textAlign: 'center !important',
      fontFamily: 'Avenir-Medium',
      fontWeight: 'normal',
      fontSize: '2rem',
      lineHeight: '2.6rem',
      letterSpacing: '0.1ch',
      color: `${colors.white}`,
    },
    '& h2': {
      textAlign: 'center !important',
      fontFamily: 'Avenir-Medium',
      fontWeight: 'normal',
      fontSize: '2rem',
      lineHeight: '2.6rem',
      letterSpacing: '0.1ch',
      color: `${colors.white}`,
    },
    '& h3': {
      // justifyContent: 'center',
      // textAlign: 'center !important',
      fontFamily: 'Avenir-Light',
      fontWeight: 'normal',
      fontSize: '1.8rem',
      lineHeight: '2.6rem',
      letterSpacing: '0.1ch',
      filter: 'saturate(0.85)',
      color: `${colors.offWhite}`,
    },
    '& h4': {
      fontFamily: 'Avenir-Book',
      fontWeight: 'normal',
      fontSize: '1.4rem !important',
      lineHeight: '1.7rem !important',
      letterSpacing: '0.09ch',
      color: `${colors.smoke}`,
    },
    '& p': {
      display: 'flex',
      // justifyContent: 'center',
      // textAlign: 'center !important',
      fontFamily: 'Avenir-Book',
      fontWeight: 'light',
      lineHeight: '2rem',
      letterSpacing: '0.1ch',
      fontSize: '1.4rem',
      color: `${colors.silver}`,
    }
  }
}
export default injectSheet(blogStyles)(BlogComponent)
