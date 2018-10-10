import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../actions/profileActions';
import Spinner from '../common/Spinner';
import ProfileActions from './ProfileActions';
import Watchlist from './Watchlist';

class Dashboard extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
  }

  onDeleteClick(e) {
    this.props.deleteAccount();
  }

  render() {
    const { user } = this.props.auth;
    const { profile, loading } = this.props.profile;

    let dashboardContent;

    if (profile === null || loading) {
      dashboardContent = <Spinner />;
    } else {
      // Check if logged in user has profile data
      if (Object.keys(profile).length > 0) {
        dashboardContent = (
          <div style={{marginBottom: '400px'}}>
            <h3>My Watchlist</h3>
            <ProfileActions />
            <Watchlist watchlist={profile.watchlist} />
          </div>
        );
      } else {
        // User is logged in but has no profile
        dashboardContent = (
          <div style={{marginBottom: '400px'}}>
            <h3>Welcome {user.name}</h3>
            <p style={{color: 'grey'}}>You have not yet created a profile</p>
            <Link to="/create-profile" className="btn btn-lg btn-success">
              Create Profile
            </Link>
            <hr/>
              <p><i className="fas fa-check"></i>  Create a watchlist of movies and shows you plan to watch</p>
              <p><i className="fas fa-check"></i>  See what your friends are watching for ideas on what to watch next</p>
          </div>
        );
      }
    }

    return (
      <div className="dashboard">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              {dashboardContent}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(mapStateToProps, { getCurrentProfile })(
  Dashboard
);
