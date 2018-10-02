import React from 'react';
import { Link } from 'react-router-dom';
import { Row } from 'reactstrap';

const ProfileActions = () => {
  return (
    <Row className="btn-group mb-4" role="group">
      <Link to="/edit-profile" className="btn btn-dark">
        <i className="fas fa-user-circle text-danger mr-1" /> Edit Profile
      </Link>
      <Link to="/create-list" className="btn btn-dark">
        <i className="fas fa-film text-danger mr-1" />
         Create List
      </Link>
    </Row>
  );
};

export default ProfileActions;
