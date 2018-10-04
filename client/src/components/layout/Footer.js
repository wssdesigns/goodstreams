import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="row">
          <div className="col-sm">
            WHAT IS GoodStreams?
            <div style={{ color: 'white', marginTop: '10px', marginBottom: '20px'}}><span style={{fontWeight: 'bolder'}}>Good</span><span style={{fontWeight: 'lighter'}}>Streams</span> is the place to browse curated lists of the best movies and shows to stream. Find what movie or show to watch next, or create a list so you always have a list of high-quality titles to watch.</div>
          </div>
          <div className="col-sm">
              COMMUNITY
              <ul style={{ color: 'white', fontSize: '0.9rem', marginTop: '10px', marginBottom: '20px'}} className="list-unstyled">
                <li>Members</li>
                <li>Forum</li>
              </ul>
          </div>
          <div className="col-sm">
              COMPANY
              <ul style={{ color: 'white', fontSize: '0.9rem', marginTop: '10px', marginBottom: '20px'}} className="list-unstyled">
                <li>About</li>
                <li>Mission</li>
                <li>Contact</li>
              </ul>
          </div>
          <div className="col-sm">
              SOCIAL
              <ul style={{ color: 'white', fontSize: '0.9rem', marginTop: '10px', marginBottom: '20px'}} className="list-unstyled">
                <li>Instagram</li>
                <li>twitter</li>
                <i className="fab fa-facebook"> Facebook</i>
              </ul>
          </div>
        </div>
        <div style={{margin: 'auto'}}>©2018 GoodStreams Inc.</div>
      </div>
    </footer>
  );
};