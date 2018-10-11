import React, { Component } from 'react';
import { connect } from 'react-redux';
import Moment from 'react-moment';

class ProfileWatchlist extends Component {
  onDeleteClick(id) {
    this.props.deleteWatchlist(id);
  }

  render() {
    const profileWatchlistContent = this.props.watchlist.map(exp => (
        <div key={exp._id} id="watchlist-item" style={{ backgroundColor: '#252526', padding: '20px', marginBottom: '10px' }}>
        <div style={{textTransform: 'uppercase', fontSize: '1.3rem'}}>{exp.videoName}</div>
        <div className="date-video-added-caption"><span style={{textTransform: 'lowercase'}}>{exp.category}</span> added <Moment fromNow>{exp.addedTime}</Moment></div>
        <div>
          <a className="trailer-links" href={`https://www.youtube.com/results?search_query=${exp.videoName} movie trailer`}>
            <i className="fab fa-youtube" aria-hidden="true"/> Trailer</a>
          <a className="imdb-links" href={`https://www.imdb.com/find?ref_=nv_sr_fn&q=${exp.videoName}&s=tt`}>
            <i className="fa fa-star" aria-hidden="true"/> IMDb</a>
        </div>
        <div className="notes">{exp.notes}</div>
      </div>
    ));
    return (
      <div>
        {profileWatchlistContent}
      </div>
    );
  }
}

export default connect(null)(ProfileWatchlist);