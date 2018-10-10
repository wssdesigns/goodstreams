import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteWatchlist } from '../../actions/profileActions';
import Moment from 'react-moment';

class Watchlist extends Component {
  onDeleteClick(id) {
    this.props.deleteWatchlist(id);
  }

  render() {
    const watchlistContent = this.props.watchlist.map(exp => (
        <div key={exp._id} style={{ backgroundColor: '#252526', padding: '20px', marginBottom: '10px' }}>
        <div style={{textTransform: 'uppercase', fontSize: '1.3rem'}}>{exp.videoName}</div>
        <div className="date-video-added-caption">you added this <span style={{textTransform: 'lowercase'}}>{exp.category}</span> <Moment fromNow>{exp.addedTime}</Moment></div>
        <div>
          <a className="trailer-links" href={`https://www.youtube.com/results?search_query=${exp.videoName} movie trailer`}>
            <i className="fab fa-youtube" aria-hidden="true"/> Trailer</a>
          <a className="imdb-links" href={`https://www.imdb.com/find?ref_=nv_sr_fn&q=${exp.videoName}&s=tt`}>
            <i className="fa fa-star" aria-hidden="true"/> IMDb</a>
          <span className="remove-video-button">
              <button
            onClick={this.onDeleteClick.bind(this, exp._id)}
            className="btn btn-link btn-sm"
          >
            Remove
          </button>
          </span>
        </div>
        <div className="notes">{exp.notes}</div>
      </div>
    ));
    return (
      <div>
        {watchlistContent}
      </div>
    );
  }
}

Watchlist.propTypes = {
  deleteWatchlist: PropTypes.func.isRequired
};

export default connect(null, { deleteWatchlist })(Watchlist);