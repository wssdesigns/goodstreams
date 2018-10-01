import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteExperience } from '../../actions/profileActions';
import Moment from 'react-moment';

class Experience extends Component {
  onDeleteClick(id) {
    this.props.deleteExperience(id);
  }

  render() {
    const experience = this.props.experience.map(exp => (

      <tr key={exp._id}>
        <td>{exp.listName}</td>
        <td>Category</td>
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
            {experience}
          </thead>
        </table>
      </div>
    );
  }
}

Experience.propTypes = {
  deleteExperience: PropTypes.func.isRequired
};

export default connect(null, { deleteExperience })(Experience);
