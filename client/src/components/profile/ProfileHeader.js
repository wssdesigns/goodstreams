import React, { Component } from 'react';
import isEmpty from '../../validation/is-empty';

class ProfileHeader extends Component {
  render() {
    const { profile } = this.props;

    return (
      <div className="row">
        <div className="col-md-12">
          <div className="card card-body text-white mb-3" style={{backgroundColor: 'rgb(37, 37, 38)'}}>
            <div className="row">
            </div>
            <div className="text-center">
              <h2 className="display-7 text-center">{profile.user.name}</h2>
              <p className="lead text-center">
                {profile.status}{' '}
                {isEmpty(profile.company) ? null : (
                  <span>at {profile.company}</span>
                )}
              </p>
              {isEmpty(profile.location) ? null : <p style={{color: 'grey'}}>{profile.location}</p>}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileHeader;
