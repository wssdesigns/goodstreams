import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import { createWatchlist } from '../../actions/profileActions';
import SelectListGroup from '../common/SelectListGroup';
import SelectSourceGroup from '../common/SelectSourceGroup';
import { Link } from 'react-router-dom';

class CreateWatchlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoName: '',
      category: '',
      videoSource: '',
      notes: '',
      addedTime: '',
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

    const videoData = {
      videoName: this.state.videoName,
      notes: this.state.notes,
      category: this.state.category,
      videoSource: this.state.videoSource,
      addedTime: new Date()
    };

    this.props.createWatchlist(videoData, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;

    const videoCategory = [
      { label: 'Category', value: 0 },
      { label: 'Movie', value: 'Movie' },
      { label: 'TV Show', value: 'TV Show' },
      { label: 'Documentary', value: 'Documentary' },
      { label: 'Short', value: 'Video' },
    ];

    const videoSource = [
      { label: 'Source', value: 0 },
      { label: 'Netflix', value: 'Netflix' },
      { label: 'Amazon', value: 'Amazon' },
      { label: 'Kanopy', value: 'Kanopy' },
      { label: 'HBO Now', value: 'HBO Now' },
      { label: 'Roku Channel', value: 'Roku Channel' },
      { label: 'Showtime', value: 'Showtime' },
      { label: 'Hulu', value: 'Hulu' },
      { label: 'Google Play', value: 'Google Play' },
      { label: 'Spectrum', value: 'Spectrum' },
      { label: 'Starz', value: 'Starz' },
      { label: 'Directv Now', value: 'Directv Now' },
      { label: 'Xfinity', value: 'Xfinity' },
      { label: 'YouTube', value: 'Youtube' },
      { label: 'Sling', value: 'Sling' },
      { label: 'Vudu', value: 'Vudu' },
      { label: 'tubi', value: 'tubi' },
      { label: 'PlayStation', value: 'PlayStation' },
      { label: 'Sony Crackle', value: 'Sony Crackle' },
      { label: 'In Theaters', value: 'In Theaters' },
      { label: 'Coming Soon', value: 'Coming Soon' },
    ];

    return (
      <div className="create-experience" style={{marginBottom: '100px'}}>
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h3 className="text-center">Add Movie or Show</h3>
              <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                  placeholder="Name"
                  name="videoName"
                  value={this.state.videoName}
                  onChange={this.onChange}
                  error={errors.videoName}
                />
                <SelectListGroup
                  placeholder="Category"
                  name="category"
                  value={this.state.category}
                  onChange={this.onChange}
                  videoCategory={videoCategory}
                  error={errors.category}
                />
                <SelectSourceGroup
                  placeholder="Source"
                  name="videoSource"
                  value={this.state.videoSource}
                  onChange={this.onChange}
                  videoSource={videoSource}
                  error={errors.videoSource}
                />
                <TextAreaFieldGroup
                  placeholder="Notes"
                  name="notes"
                  value={this.state.notes}
                  onChange={this.onChange}
                  error={errors.notes}
                />

                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-success btn-block mt-4"
                />
              </form>
              <div style={{textAlign: 'center', marginTop: '20px'}}>
                <Link style={{color: 'grey', fontSize: '0.8rem'}} className="nav-link" to="/">
                  cancel
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CreateWatchlist.propTypes = {
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  watchlist: state.watchlist,
  profile: state.profile,
  errors: state.errors
});

export default connect(mapStateToProps, { createWatchlist })(
  withRouter(CreateWatchlist)
);