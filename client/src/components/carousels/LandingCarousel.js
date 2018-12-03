import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import screenShotOne from '../../img/goodstreams-screenshot1.png';
import screenShotTwo from '../../img/goodstreams-screenshot2.png';
import screenShotThree from '../../img/goodstreams-screenshot3.png';

const items = [
  {
    src: screenShotOne,
    altText: 'Screen shot 1 - add movie to watchlist'
  },
  {
    src: screenShotTwo,
    altText: 'Screen shot 2 - create a watchlist'
  },
  {
    src: screenShotThree,
    altText: 'Screen shot 3 - browse friend\'s watchlists'
  }
];

const LandingCarousel = () => <UncontrolledCarousel items={items} />;

export default LandingCarousel;