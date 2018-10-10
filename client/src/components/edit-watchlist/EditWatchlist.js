import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import { createWatchlist, getCurrentProfile } from '../../actions/profileActions';
import isEmpty from '../../validation/is-empty';

class CreateWatchlist extends Component {
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

    if (nextProps.profile.watchlist) {
      const watchlist = nextProps.profile.watchlist;

      // If list field doesnt exist, make empty string
      watchlist.videoName = !isEmpty(watchlist.videoName) ? watchlist.videoName : '';
      watchlist.description = !isEmpty(watchlist.description) ? watchlist.description : '';

      // Set component fields state
      this.setState({
        videoName: watchlist.videoName,
        description: watchlist.description,
      });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const expData = {
      videoName: this.state.videoName,
      description: this.state.description
    };

    this.props.createWatchlist(expData, this.props.history);
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
              <h1 className="display-4 text-center">Edit Watchlist</h1>
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

CreateWatchlist.propTypes = {
  createWatchlist: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(mapStateToProps, { createWatchlist, getCurrentProfile })(
  withRouter(CreateWatchlist)
);
