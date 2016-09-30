import React, { Component } from 'react';

export default class CommentBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comment: ''
    };
  }

  handleChange(event) {
    this.setState({ comment: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState({ comment: '' });
  }

  render() {
    return (
      <form className="comment-box" onSubmit={this.handleSubmit.bind(this)}>
        <textarea
          onChange={this.handleChange.bind(this)}
          value={this.state.comment}
        />
        <button type="submit" className="btn btn-primary">Add Comment</button>
      </form>
    );
  }
}
