import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addExperience } from '../../actions/profileActions';

class AddExperience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listName: '',
      description: '',
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
      lastChange: '1234',
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
      listName: this.state.listName,
      description: this.state.description,
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

    this.props.addExperience(expData, this.props.history);
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
              <h1 className="display-4 text-center">Create List</h1>
              <p className="lead text-center">
                Include movies or shows you plan to stream
              </p>
              <small className="d-block pb-3">* = required fields</small>
              <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                  placeholder="* List Name"
                  name="listName"
                  value={this.state.listName}
                  onChange={this.onChange}
                  error={errors.listName}
                />
                <TextAreaFieldGroup
                  placeholder="* Description"
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

AddExperience.propTypes = {
  addExperience: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(mapStateToProps, { addExperience })(
  withRouter(AddExperience)
);
