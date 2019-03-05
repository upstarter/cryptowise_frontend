import React from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import BlogListItem from './BlogListItem'


class BlogListContainer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      blogPosts: [],
      selectedPost: null,
      isLoading: true,
      error: null
    }
  }


  componentDidMount() {

      this.setState({ isLoading: true });

      fetch('/api/v1/blog_posts')
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
    console.log(this);
    return (
      <div>
        <ul className="blog-list">
          {
            this.state.blogPosts.map((blogPost) => {
              return (
                <BlogListItem
                  onPostSelect={this.state.onPostSelect}
                  key={blogPost}
                  blogPost={blogPost} />
              )
            })
          }
        </ul>
      </div>
    )
  }
}


// whatever is returned will show up as props inside BookList

const mapStateToProps = (state, ownProps) => {
  return {
    blogPosts: state.blogPosts
  }
}
//anything returned from here will end up as props on BookListContainer
//whenever selectPost is called the result should be passed to all reducers

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({selectPost: null}, dispatch);
}

// connect takes a function and component and produces a container that is aware
// of state contained by redux
// promote BookList to Container
export default connect(mapStateToProps, mapDispatchToProps)(BlogListContainer);
