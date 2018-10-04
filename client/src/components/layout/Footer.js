import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="row">
          <div className="col-sm">
            WHAT IS <span style={{fontWeight: 'bolder'}}>Good</span><span style={{fontWeight: 'lighter'}}>Streams</span>?
            <div style={{ color: 'white', marginTop: '10px', marginBottom: '20px'}}><span style={{fontWeight: 'bolder'}}>Good</span><span style={{fontWeight: 'lighter'}}>Streams</span> is the place to browse curated lists of the best movies and shows to stream. Find what movie or show to watch next, or create a list so you always have a list of high-quality titles to watch.</div>
          </div>
          <div className="col-sm">
              COMMUNITY
              <ul style={{ color: 'white', fontSize: '0.9rem', marginTop: '10px', marginBottom: '20px'}} className="list-unstyled">
                <li>
                  <Link to="/profiles" style={{ color: 'white' }}>
                    Members
                  </Link>
                </li>
                <li>
                  <Link to="/lists" style={{ color: 'white' }}>
                    Lists
                  </Link>
                </li>
                <li>
                  <Link to="/forum" style={{ color: 'white' }}>
                    Forum
                  </Link>
                </li>
              </ul>
          </div>
          <div className="col-sm">
              COMPANY
              <ul style={{ color: 'white', fontSize: '0.9rem', marginTop: '10px', marginBottom: '20px'}} className="list-unstyled">
                <li>
                  <Link to="/about" style={{ color: 'white' }}>
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/faq" style={{ color: 'white' }}>
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link to="/contact" style={{ color: 'white' }}>
                    Contact
                  </Link>
                </li>
              </ul>
          </div>
          <div className="col-sm">
              SOCIAL
              <ul style={{ color: 'white', fontSize: '0.9rem', marginTop: '10px', marginBottom: '20px'}} className="list-unstyled">
                <li><i className="fab fa-instagram"></i><a href="https://www.instagram.com/goodstreamsio/" style={{ color: 'white' }}> Instagram</a></li>
                <li><i className="fab fa-twitter"></i><a href="https://twitter.com/goodstreamsio" style={{ color: 'white' }}> twitter</a></li>
                <li><i className="fab fa-facebook"></i><a href="https://facebook.com/goodstreamsio" style={{ color: 'white' }}> Facebook</a></li>
              </ul>
          </div>
        </div>
        <div style={{margin: 'auto'}}>&copy; {new Date().getFullYear()} GoodStreams Inc.</div>
      </div>
    </footer>
  );
};