import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import { createExperience, getCurrentProfile } from '../../actions/profileActions';
import isEmpty from '../../validation/is-empty';

class CreateExperience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoName: '',
      description: '',
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

    if (nextProps.profile.experience) {
      const experience = nextProps.profile.experience;

      // If list field doesnt exist, make empty string
      experience.videoName = !isEmpty(experience.videoName) ? experience.videoName : '';
      experience.description = !isEmpty(experience.description) ? experience.description : '';

      // Set component fields state
      this.setState({
        videoName: experience.videoName,
        description: experience.description,
      });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const expData = {
      videoName: this.state.videoName,
      description: this.state.description
    };

    this.props.createExperience(expData, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="add-experience">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <Link to="/dashboard" className="btn btn-light">
                Go Back
              </Link>
              <h1 className="display-4 text-center">Edit Experience</h1>
              <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                  placeholder="* List Name"
                  name="videoName"
                  value={this.state.videoName}
                  onChange={this.onChange}
                  error={errors.videoName}
                />
                <TextAreaFieldGroup
                  placeholder="List Description"
                  name="description"
                  value={this.state.description}
                  onChange={this.onChange}
                  error={errors.description}
                />
                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-info btn-block mt-4"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CreateExperience.propTypes = {
  createExperience: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(mapStateToProps, { createExperience, getCurrentProfile })(
  withRouter(CreateExperience)
);
