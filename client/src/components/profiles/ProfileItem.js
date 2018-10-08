import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import isEmpty from '../../validation/is-empty';

class ProfileItem extends Component {
  render() {
    const { profile } = this.props;

    return (
      <div className="card card-body mb-3" style={{backgroundColor: 'rgb(37, 37, 38)', color: 'white'}}>
        <div className="row">
          <div className="col-3">
            <img src={profile.user.avatar} alt="" className="rounded-circle" />
          </div>
          <div className="col-lg-6 col-md-4 col-8 text-light">
            <h3>{profile.user.name}</h3>
            <p>
              {isEmpty(profile.location) ? null : (
                <span>{profile.location}</span>
              )}
            </p>
            <p>
              {isEmpty(profile.favoriteMovie) ? null : (
                <span>Favorite movie: {profile.favoriteMovie}</span>
              )}
            </p>
            <p>
              {isEmpty(profile.favoriteShow) ? null : (
                <span>Favorite show: {profile.favoriteShow}</span>
              )}
            </p>
            <Link 
              to={`/profile/${profile.handle}`} 
              className="btn btn-md btn-outline-light">
              <i className="fa fa-list" aria-hidden="true"></i>  Browse Watchlist
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileItem;
