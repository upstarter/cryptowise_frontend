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
            <Row className="card-row" type="flex" justify="center">
              {blogPosts.map(post =>
                <Col key={post.link} xs={25} sm={25} md={7} lg={7} xl={7}>
                  <div key={post.link} className={classes.card}>
                    <div className="card-content" className={classes.card_content}>
                      <p id="date" className="caption" dangerouslySetInnerHTML={{__html: post.date}}>
                      </p>
                      <div className="card-content" dangerouslySetInnerHTML={{__html: post.content}}>
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
    '& a': { background: 'none !important' }
  },
  heading: {
    textAlign: 'center',

    '& h1': {
      color: `${colors.white}`
    }
  },
  card: {
    maxWidth: '40ch !important',
    minHeight: '100%',

    '@media (max-width: 808px)': {
      maxWidth: '30ch !important',
      marginBottom: 70,

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

    '& h3': {
      textAlign: 'center !important',
      fontFamily: 'Avenir-Light',
      fontWeight: 'normal',
      fontSize: '2rem !important',
      lineHeight: '2.7rem',
      letterSpacing: '0.1ch',
      filter: 'saturate(0.85)',
      color: `${colors.offWhite}`,
    },
    '& h4': {
      padding: 10,
      fontFamily: 'Avenir-Book',
      // fontWeight: 'normal',
      fontSize: '1.48rem !important',
      lineHeight: '2.2rem !important',
      letterSpacing: '0.09ch',
      color: `${colors.silver}`,
    },
    '& p': {
      padding: 5,
      fontFamily: 'Avenir-Book',
      fontWeight: 'light',
      lineHeight: '2rem',
      letterSpacing: '0.1ch',
      fontSize: '1.4rem',
      color: `${colors.smoke}`,
    },

    '& .link': {
      color: `${colors.origGreen}`
    },
  }
}
export default injectSheet(blogStyles)(BlogComponent)
