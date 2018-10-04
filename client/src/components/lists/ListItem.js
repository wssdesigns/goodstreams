import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import { deleteList, addLike, removeLike } from '../../actions/listActions';
import Moment from 'react-moment';

class ListItem extends Component {

  onDeleteClick(id) {
    this.props.deleteList(id);
  }

  onLikeClick(id) {
    this.props.addLike(id);
  }

  onUnlikeClick(id) {
    this.props.removeLike(id);
  }

  findUserLike(likes) {
    const { auth } = this.props;
    if (likes.filter(like => like.user === auth.user.id).length > 0) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    const { list, auth, showActions } = this.props;

    const firstName = list.name.trim().split(' ')[0];

    return (
      <div className="card card-body mb-1">
        <div className="row">
          <div className="col-md-12">
            <p id="forum-body-text">{list.text}</p>
            <br />
            <hr></hr>
            <p className="text-left" id="forum-posted-by-text">
              by {firstName} {<Moment fromNow ago>{list.date}</Moment>} ago
            </p>
            {showActions ? (
              <span>
                <button
                  onClick={this.onLikeClick.bind(this, list._id)}
                  type="button"
                  className="btn btn-light mr-1"
                >
                  <i
                    className={classnames('fas fa-thumbs-up', {
                      'text-info': this.findUserLike(list.likes)
                    })}
                  />
                  <span className="badge badge-light">{list.likes.length}</span>
                </button>
                <button
                  onClick={this.onUnlikeClick.bind(this, list._id)}
                  type="button"
                  className="btn btn-light mr-1"
                >
                  <i className="text-secondary fas fa-thumbs-down" />
                </button>
                <Link to={`/list/${list._id}`} className="btn btn-sm btn-outline-dark ml-2 mr-1">
                  Replies
                </Link>
                {list.user === auth.user.id ? (
                  <button
                    onClick={this.onDeleteClick.bind(this, list._id)}
                    type="button"
                    className="btn btn-outline-danger btn-sm ml-2 mr-2"
                  >
                    Remove
                  </button>
                ) : null}
              </span>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

ListItem.defaultProps = {
  showActions: true
};

ListItem.propTypes = {
  deleteList: PropTypes.func.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  list: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { deleteList, addLike, removeLike })(
  ListItem
);
