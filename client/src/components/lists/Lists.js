import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ListForm from './ListForm';
import ListFeed from './ListFeed';
import Spinner from '../common/Spinner';
import { getLists } from '../../actions/listActions';

class Lists extends Component {
  componentDidMount() {
    this.props.getLists();
  }

  render() {
    const { lists, loading } = this.props.list;
    let listContent;

    if (lists === null || loading) {
      listContent = <Spinner />;
    } else {
      listContent = <ListFeed lists={lists} />;
    }

    return (
      <div className="feed">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
            <h1 className="display-4 text-left">Lists</h1>
              <p className="lead text-left">
                Browse lists of movies and shows to watch
              </p>
              <ListForm />
              {listContent}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Lists.propTypes = {
  getLists: PropTypes.func.isRequired,
  list: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  list: state.list
});

export default connect(mapStateToProps, { getLists })(Lists);
