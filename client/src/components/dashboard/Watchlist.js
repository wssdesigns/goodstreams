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
        <div key={exp._id} id="watchlist-item" style={{ backgroundColor: '#252526', padding: '20px', marginBottom: '10px' }}>
        <div style={{textTransform: 'uppercase', fontSize: '1.3rem'}}>{exp.videoName}</div>
        <div className="date-video-added-caption">you added this <span style={{textTransform: 'lowercase'}}>{exp.category}</span> <Moment fromNow>{exp.addedTime}</Moment></div>
        <div style={{marginTop: '5px'}}>
          <a className="trailer-links" href={`https://www.youtube.com/results?search_query=${exp.videoName} movie trailer`}>
            <i className="fab fa-youtube" aria-hidden="true"/> Trailer</a>
          <a className="imdb-links" href={`https://www.imdb.com/find?ref_=nv_sr_fn&q=${exp.videoName}&s=tt`}>
            <i className="fa fa-star" aria-hidden="true"/> IMDb</a>
            {exp.videoSource ? <span className="source-links"><i className="fa fa-map" aria-hidden="true"></i> {exp.videoSource}</span> : null}
            {exp.notes ? <div className="notes" style={{marginTop: '10px'}}>"{exp.notes}"</div> : null}
          <div id="remove-video-container">
            <button
              onClick={this.onDeleteClick.bind(this, exp._id)}
              className="btn btn-outline-secondary btn-sm"
              id="remove-video-button"
            >
            x
            </button>
          </div>
        </div>
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