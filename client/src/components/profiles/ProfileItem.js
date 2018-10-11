import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import isEmpty from '../../validation/is-empty';

class ProfileItem extends Component {
  render() {
    const { profile } = this.props;

    return (
      <div className="card card-body mb-3" style={{backgroundColor: 'rgb(37, 37, 38)', color: 'white'}}>
            <h3>{profile.user.name}</h3>

              {isEmpty(profile.favoriteMovie) ? null : (
                <div>Favorite movie: {profile.favoriteMovie}</div>
              )}
              {isEmpty(profile.favoriteShow) ? null : (
                <span>Favorite show: {profile.favoriteShow}</span>
              )}
              <div style={{marginTop: '20px'}}>
                <Link
                  to={`/profile/${profile.handle}`} 
                  className="btn btn-md btn-outline-light">
                  <i className="fa fa-list" aria-hidden="true"></i>  Watchlist
                </Link>
              </div>
      </div>
    );
  }
}

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileItem;
