import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CommentItem from './CommentItem';

class CommentFeed extends Component {
  render() {
    const { comments, listId } = this.props;

    return comments.map(comment => (
      <CommentItem key={comment._id} comment={comment} listId={listId} />
    ));
  }
}

CommentFeed.propTypes = {
  comments: PropTypes.array.isRequired,
  listId: PropTypes.string.isRequired
};

export default CommentFeed;
