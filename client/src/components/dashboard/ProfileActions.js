import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

const ProfileActions = () => {
  return (
      <Link to="/create-experience">
        <Button block id="add-title-button">
          <i className="fas fa-film text-white mr-1" />
          Add Movie or Show
         </Button>
      </Link>

  );
};

export default ProfileActions;
