import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import { createProfile, getCurrentProfile } from '../../actions/profileActions';
import isEmpty from '../../validation/is-empty';

class CreateProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      handle: '',
      location: '',
      bio: '',
      favoriteMovie: '',
      favoriteShow: '',
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    this.props.getCurrentProfile();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }

    if (nextProps.profile.profile) {
      const profile = nextProps.profile.profile;

      // If profile field doesnt exist, make empty string
      profile.location = !isEmpty(profile.location) ? profile.location : '';
      profile.bio = !isEmpty(profile.bio) ? profile.bio : '';
      profile.favoriteMovie = !isEmpty(profile.favoriteMovie) ? profile.favoriteMovie : '';
      profile.favoriteShow = !isEmpty(profile.favoriteShow) ? profile.favoriteShow : '';

      // Set component fields state
      this.setState({
        handle: profile.handle,
        location: profile.location,
        bio: profile.bio,
        favoriteMovie: profile.favoriteMovie,
        favoriteShow: profile.favoriteShow
      });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const profileData = {
      handle: this.state.handle,
      location: this.state.location,
      bio: this.state.bio || null,
      favoriteMovie: this.state.favoriteMovie,
      favoriteShow: this.state.favoriteShow
    };

    this.props.createProfile(profileData, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="create-profile" style={{marginBottom: '100px'}}>
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
            <h3 className="text-left">Edit Profile</h3>
              <form onSubmit={this.onSubmit}>
                <div style={{color:'grey'}}>Profile Handle*</div>
                <TextFieldGroup
                  placeholder="A unique handle for your profile URL"
                  name="handle"
                  value={this.state.handle}
                  onChange={this.onChange}
                  error={errors.handle}
                />
                <div style={{color:'grey'}}>Location</div>
                <TextFieldGroup
                  placeholder="Where do you live?"
                  name="location"
                  value={this.state.location}
                  onChange={this.onChange}
                  error={errors.location}
                />
                <div style={{color:'grey'}}>Bio</div>
                <TextAreaFieldGroup
                  placeholder="What kind of movies and shows do you like?"
                  name="bio"
                  value={this.state.bio}
                  onChange={this.onChange}
                  error={errors.bio}
                />
                <div style={{color:'grey'}}>Favorite Movie</div>
                <TextFieldGroup
                  placeholder="e.g. Pulp Fiction"
                  name="favoriteMovie"
                  value={this.state.favoriteMovie}
                  onChange={this.onChange}
                  error={errors.favoriteMovie}
                />
                <div style={{color:'grey'}}>Favorite TV show</div>
                <TextFieldGroup
                  placeholder="e.g. The Wire"
                  name="favoriteShow"
                  value={this.state.favoriteShow}
                  onChange={this.onChange}
                  error={errors.favoriteShow}
                />


                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-success btn-block mt-4"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CreateProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
  withRouter(CreateProfile)
);
