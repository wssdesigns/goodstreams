import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem';

class ListFeed extends Component {
  render() {
    const { lists } = this.props;

    return lists.map(list => <ListItem key={list._id} list={list} />);
  }
}

ListFeed.propTypes = {
  lists: PropTypes.array.isRequired
};

export default ListFeed;