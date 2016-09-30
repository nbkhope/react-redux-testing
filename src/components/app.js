import React, { Component } from 'react';

import CommentBox from './comment_box';
import CommentList from './comment_list';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Testing a React-Redux App</h1>

        <CommentBox />

        <h2>Comments</h2>
        <CommentList />

      </div>
    );
  }
}
