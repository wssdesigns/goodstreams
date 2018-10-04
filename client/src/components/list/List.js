import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ListItem from '../lists/ListItem';
import CommentForm from './CommentForm';
import CommentFeed from './CommentFeed';
import Spinner from '../common/Spinner';
import { getList } from '../../actions/listActions';

class List extends Component {
  componentDidMount() {
    this.props.getList(this.props.match.params.id);
  }

  render() {
    const { list, loading } = this.props.list;
    let listContent;

    if (list === null || loading || Object.keys(list).length === 0) {
      listContent = <Spinner />;
    } else {
      listContent = (
        <div>
          <ListItem list={list} showActions={false} />
          <CommentForm listId={list._id} />
          <h3>Replies</h3>
          <CommentFeed listId={list._id} comments={list.comments} />
        </div>
      );
    }

    return (
      <div className="post">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Link to="/lists" className="btn btn-light mb-3">
                Back To Forum
              </Link>
              {listContent}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

List.propTypes = {
  getList: PropTypes.func.isRequired,
  list: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  list: state.list
});

export default connect(mapStateToProps, { getList })(List);
