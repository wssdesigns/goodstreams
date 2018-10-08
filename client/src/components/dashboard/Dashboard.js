import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile, deleteAccount } from '../../actions/profileActions';
import Spinner from '../common/Spinner';
import ProfileActions from './ProfileActions';
import Experience from './Experience';

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
    const firstName = user.name.trim().split(' ')[0];

    let dashboardContent;

    if (profile === null || loading) {
      dashboardContent = <Spinner />;
    } else {
      // Check if logged in user has profile data
      if (Object.keys(profile).length > 0) {
        dashboardContent = (
          <div style={{marginBottom: '400px'}}>
            <h6 style={{marginBottom: '20px', color: 'grey'}}>
              Welcome, <Link id="welcome-name" to={`/profile/${profile.handle}`}>{firstName}</Link>
            </h6>
            <h1>My Watchlist</h1>
            <ProfileActions />
            <Experience experience={profile.experience} />
          </div>
        );
      } else {
        // User is logged in but has no profile
        dashboardContent = (
          <div>
            <h1>Welcome {user.name}</h1>
            <p>You have not yet created a profile</p>
            <Link to="/create-profile" className="btn btn-lg btn-success">
              Create Profile
            </Link>
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
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
  Dashboard
);
