import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import { createProfile } from '../../actions/profileActions';

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

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const profileData = {
      handle: this.state.handle,
      location: this.state.location,
      bio: this.state.bio,
      favoriteMovie: this.state.favoriteMovie,
      favoriteShow: this.state.favoriteShow,
    };

    this.props.createProfile(profileData, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="create-profile" style={{marginBottom: '400px'}}>
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h3 className="text-center">Create Your Profile</h3>
              <form onSubmit={this.onSubmit}>
                <small style={{color:'grey'}}>Profile Handle</small>
                <TextFieldGroup
                  placeholder="Profile Handle*"
                  name="handle"
                  value={this.state.handle}
                  onChange={this.onChange}
                  error={errors.handle}
                />
                <small style={{color:'grey'}}>Location</small>
                <TextFieldGroup
                  placeholder="Location"
                  name="location"
                  value={this.state.location}
                  onChange={this.onChange}
                  error={errors.location}
                />
                <small style={{color:'grey'}}>Bio</small>
                <TextAreaFieldGroup
                  placeholder="Short Bio"
                  name="bio"
                  value={this.state.bio}
                  onChange={this.onChange}
                  error={errors.bio}
                />
                <small style={{color:'grey'}}>Favorite Movie</small>
                <TextFieldGroup
                  placeholder="Favorite Movie"
                  name="favoriteMovie"
                  value={this.state.favoriteMovie}
                  onChange={this.onChange}
                  error={errors.favoriteMovie}
                />
                <small style={{color:'grey'}}>Favorite Show</small>
                <TextFieldGroup
                  placeholder="Favorite Show"
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
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(mapStateToProps, { createProfile })(
  withRouter(CreateProfile)
);
