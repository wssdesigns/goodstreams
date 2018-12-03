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
    const { profile, loading } = this.props.profile;

    let dashboardContent;

    if (profile === null || loading) {
      dashboardContent = <Spinner />;
    } else {
      // Check if logged in user has profile data
      if (Object.keys(profile).length > 0) {
        if (Object.keys(profile.watchlist).length > 0) {
          dashboardContent = (
            <div style={{marginBottom: '100px'}}>
                <div style={{textAlign: 'center', fontSize: '0.9rem', paddingBottom: '10px', borderBottom: '.5px solid rgb(37, 37, 38)', marginBottom: '10px'}}>
                <span style={{paddingRight: '10px', color: 'white'}}>
                    <i className="fas fa-bookmark"></i>
                    <a style={{color: 'white'}} href={`https://www.goodstreams.io/addtohomescreen`}> Add to home screen</a>
                  </span>
                  <span style={{paddingRight: '10px'}}>
                    <i className="fas fa-link"></i> 
                    <a style={{color: 'white'}} href={`https://www.goodstreams.io/profile/${profile.handle}`}> Share watchlist</a>
                  </span>
                </div>
              <h2 style={{padding: '10px'}}>My Watchlist
              </h2>
              <ProfileActions />
              <Watchlist watchlist={profile.watchlist} />
            </div>
          );
        } else {
          dashboardContent = (
            <div style={{marginBottom: '100px'}}>
              <h2>My Watchlist</h2>
              <ProfileActions />
              <div style={{color: 'grey'}}>
                <h4>Time to add some titles to your watchlist</h4>
                <p style={{marginTop: '15px'}}>
                  <i className="fas fa-check"></i>  Keep track of what you plan to watch
                  </p>
                <p>
                  <i className="fas fa-check"></i>  Share what you're planning to watch with friends
                </p>
              </div>
            </div>
          );
        }
      } else {
        // User is logged in but has no profile
        dashboardContent = (
          <div style={{marginBottom: '100px'}}>
            <h3>Welcome</h3>
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
