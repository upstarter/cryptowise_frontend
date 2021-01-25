import React from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

class DiscussContainer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      discussions: [],
      selectedDiscussion: null,
      isLoading: true,
      error: null
    }
  }

  componentDidMount() {
      this.setState({ isLoading: true });

      fetch('/v1/discussions')
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Something went wrong ...');
          }
        })
        .then(data => this.setState({
          discussions: data.discussions,
          selectedDiscussion: data.discussions[0],
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
            this.state.discussions.map((discussion) => {
              return (
                <Discussion
                  onDiscussionSelect={this.state.onDiscussionSelect}
                  key={discussion}
                  discussion={discussion} />
              )
            })
          }
        </ul>
      </div>
    )
  }
}


// whatever is returned will show up as props inside Discuss

const mapStateToProps = (state, ownProps) => {
  return {
    discussions: state.discussions
  }
}

// anything returned from here will end up as props on DiscussContainer
// whenever selectPost is called the result should be passed to all reducers
const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({selectDiscussion: null}, dispatch);
}

// connect takes a function and component and produces a container that is aware
// of state contained by redux
// promote Discuss to Container
export default connect(mapStateToProps, mapDispatchToProps)(DiscussContainer);
