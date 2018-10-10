import React, { Component } from 'react';
import isEmpty from '../../validation/is-empty';
import { Link } from 'react-router-dom';

class ProfileHeader extends Component {
  render() {
    const { profile } = this.props;

    return (
      <div className="row">
        <div className="col-md-12">
          <div className="card card-body text-white mb-3" style={{backgroundColor: 'rgb(37, 37, 38)'}}>
            <div className="row">
              <div className="col-4 col-md-2 m-auto">
                <img
                  className="rounded-circle"
                  src={profile.user.avatar}
                  alt=""
                />
              </div>
            </div>
            <div className="text-center">
              <h2 className="display-7 text-center">{profile.user.name}</h2>
              <p className="lead text-center">
                {profile.status}{' '}
                {isEmpty(profile.company) ? null : (
                  <span>at {profile.company}</span>
                )}
              </p>
              {isEmpty(profile.location) ? null : <p>{profile.location}</p>}
              <Link to={`/edit-profile`}>Edit Profile</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileHeader;
