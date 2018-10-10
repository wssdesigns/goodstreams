import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import { CreateWatchlist } from '../../actions/profileActions';
import SelectListGroup from '../common/SelectListGroup';
import { Link } from 'react-router-dom';


class CreateWatchlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoName: '',
      category: '',
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

    const expData = {
      videoName: this.state.videoName,
      notes: this.state.notes,
      category: this.state.category,
      addedTime: new Date()
    };

    this.props.CreateWatchlist(expData, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;


  // Select options for status
  const options = [
    { label: 'Category', value: 0 },
    { label: 'Movie', value: 'Movie' },
    { label: 'TV Show', value: 'TV Show' },
    { label: 'Documentary', value: 'Documentary' },
    { label: 'Short', value: 'Video' },
  ];

    return (
      <div className="create-experience" style={{marginBottom: '400px'}}>
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Add Movie or Show</h1>
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
                  options={options}
                  error={errors.category}
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
                <Link style={{color: 'white'}} className="nav-link" to="/register">
                  Cancel
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

export default connect(mapStateToProps, { CreateWatchlist })(
  withRouter(CreateWatchlist)
);