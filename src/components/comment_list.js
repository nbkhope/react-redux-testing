import React, { Component } from 'react';
import { connect } from 'react-redux';

class CommentList extends Component {
  render() {
    const list = this.props.comments.map((comment, index) => {
      //console.log(comment, index);
      return <li key={index} className="list-group-item">{comment}</li>;
    });
    return (
      <ul className="comment-list list-group">
        {list}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return { comments: state.comments };
}

export default connect(mapStateToProps)(CommentList);
