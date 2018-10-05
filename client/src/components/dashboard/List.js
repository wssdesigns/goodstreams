import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteList } from '../../actions/profileActions';
import Moment from 'react-moment';

class List extends Component {
  onDeleteClick(id) {
    this.props.deleteList(id);
  }

  render() {
    const list = this.props.list.map(exp => (

      <tr key={exp._id}>
        <td>{exp.videoName}</td>
        <td>{exp.category}</td>
        <td><Moment fromNow>{exp.lastChange}</Moment></td>
        <td>
          <button
            onClick={this.onDeleteClick.bind(this, exp._id)}
            className="btn btn-outline-danger btn-sm"
          >
            x
          </button>
        </td>
      </tr>
    ));
    return (
      <div>
        <h4 className="mb-4">Lists</h4>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Updated</th>
              <th />
            </tr>
            {list}
          </thead>
        </table>
      </div>
    );
  }
}

List.propTypes = {
  deleteList: PropTypes.func.isRequired
};

export default connect(null, { deleteList })(List);
