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
        <div key={exp._id}>
        <div style={{textTransform: 'uppercase'}}>{exp.videoName}</div>
        <div>{exp.category}</div>
        <div>added <Moment fromNow>{exp.addedTime}</Moment></div>
        <div>
          <a className="trailer-links" href={`https://www.youtube.com/results?search_query=${exp.videoName} movie trailer`}>Trailer</a> | 
          <a className="imdb-links" href={`https://www.imdb.com/find?ref_=nv_sr_fn&q=${exp.videoName}&s=tt`}>IMDb</a>
        </div>
        <div id="line-three">{exp.notes}</div>
        <div>
          <button
            onClick={this.onDeleteClick.bind(this, exp._id)}
            className="btn btn-danger"
          >
            Delete
          </button>
        </div>
      </div>
    ));
    return (
      <div>
        {experience}
      </div>
    );
  }
}

Experience.propTypes = {
  deleteExperience: PropTypes.func.isRequired
};

export default connect(null, { deleteExperience })(Experience);