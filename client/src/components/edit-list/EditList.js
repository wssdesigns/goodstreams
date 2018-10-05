import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import { createList } from '../../actions/profileActions';
import SelectListGroup from '../common/SelectListGroup';
import isEmpty from '../../validation/is-empty';

class CreateList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoName: '',
      description: '',
      category: '',
      videoOne: '',
      videoTwo: '',
      videoThree: '',
      videoFour: '',
      videoFive: '',
      videoSix: '',
      videoSeven: '',
      videoEight: '',
      videoNine: '',
      videoTen: '',
      lastChange: '',
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

    const listData = {
      videoName: this.state.videoName,
      description: this.state.description,
      category: this.state.category,
      videoOne: this.state.videoOne,
      videoTwo: this.state.videoTwo,
      videoThree: this.state.videoThree,
      videoFour: this.state.videoFour,
      videoFive: this.state.videoFive,
      videoSix: this.state.videoSix,
      videoSeven: this.state.videoSeven,
      videoEight: this.state.videoEight,
      videoNine: this.state.videoNine,
      videoTen: this.state.videoTen,
      lastChange: new Date()
    };

    this.props.createList(listData, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;

    // Select options for category
    const options = [
      { label: 'Select category*', value: 0 },
      { label: 'Movies', value: 'Movies' },
      { label: 'TV Shows', value: 'TV Shows' },
      { label: 'Documentaries', value: 'Documentaries' },
      { label: 'Coming Soon', value: 'Coming Soon' },
      { label: 'Other', value: 'Other' }
    ];

    return (
      <div className="create-list">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <Link to="/dashboard" className="btn btn-light">
                Go Back
              </Link>
              <h1 className="display-4 text-left">Create List</h1>
              <p className="lead text-left">
                What movies or shows do you plan to stream?
              </p>
              <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                  placeholder="List Name*"
                  name="videoName"
                  value={this.state.videoName}
                  onChange={this.onChange}
                  error={errors.videoName}
                />
                <SelectListGroup
                  placeholder="Category*"
                  name="category"
                  value={this.state.category}
                  onChange={this.onChange}
                  options={options}
                  error={errors.category}
                />
                <TextAreaFieldGroup
                  placeholder="Description*"
                  name="description"
                  value={this.state.description}
                  onChange={this.onChange}
                  error={errors.description}
                />
                <div className="d-block pb-3">Title #1</div>
                <TextFieldGroup
                  placeholder="Movie or show name"
                  name="videoOne"
                  value={this.state.videoOne}
                  onChange={this.onChange}
                  error={errors.videoOne}
                />
                <div className="d-block pb-3">Title #2</div>
                <TextFieldGroup
                  placeholder="Movie or show name"
                  name="videoTwo"
                  value={this.state.videoTwo}
                  onChange={this.onChange}
                  error={errors.videoTwo}
                />
                <div className="d-block pb-3">Title #3</div>
                <TextFieldGroup
                  placeholder="Movie or show name"
                  name="videoThree"
                  value={this.state.videoThree}
                  onChange={this.onChange}
                  error={errors.videoThree}
                />
                <div className="d-block pb-3">Title #4</div>
                <TextFieldGroup
                  placeholder="Movie or show name"
                  name="videoFour"
                  value={this.state.videoFour}
                  onChange={this.onChange}
                  error={errors.videoFour}
                />
                <div className="d-block pb-3">Title #5</div>
                <TextFieldGroup
                  placeholder="Movie or show name"
                  name="videoFive"
                  value={this.state.videoFive}
                  onChange={this.onChange}
                  error={errors.videoFive}
                />
                <div className="d-block pb-3">Title #6</div>
                <TextFieldGroup
                  placeholder="Movie or show name"
                  name="videoSix"
                  value={this.state.videoSix}
                  onChange={this.onChange}
                  error={errors.videoSix}
                />
                <div className="d-block pb-3">Title #7</div>
                <TextFieldGroup
                  placeholder="Movie or show name"
                  name="videoSeven"
                  value={this.state.videoSeven}
                  onChange={this.onChange}
                  error={errors.videoSeven}
                />
                <div className="d-block pb-3">Title #8</div>
                <TextFieldGroup
                  placeholder="Movie or show name"
                  name="videoEight"
                  value={this.state.videoEight}
                  onChange={this.onChange}
                  error={errors.videoEight}
                />
                <div className="d-block pb-3">Title #9</div>
                <TextFieldGroup
                  placeholder="Movie or show name"
                  name="videoNine"
                  value={this.state.videoNine}
                  onChange={this.onChange}
                  error={errors.videoNine}
                />
                <div className="d-block pb-3">Title #10</div>
                <TextFieldGroup
                  placeholder="Movie or show name"
                  name="videoTen"
                  value={this.state.videoTen}
                  onChange={this.onChange}
                  error={errors.videoTen}
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

CreateList.propTypes = {
  createList: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(mapStateToProps, { createList })(
  withRouter(CreateList)
);
