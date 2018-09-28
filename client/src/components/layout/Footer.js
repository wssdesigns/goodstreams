import React from 'react';
import { Card, CardTitle, CardText, Row, Col } from 'reactstrap';

export default () => {
  return (
    <footer id="footer">
      <Row>
        <Col sm="6">
          <Card body inverse style={{ backgroundColor: '#191818'}}>
            <CardTitle style={{ color: 'grey'}}>WHAT IS <span style={{fontWeight: 'bolder'}}>Good</span><span style={{fontWeight: 'lighter'}}>Streams</span>?</CardTitle>
            <CardText style={{ color: 'grey', fontSize: '0.9rem'}}><span style={{fontWeight: 'bolder'}}>Good</span><span style={{fontWeight: 'lighter'}}>Streams</span> is the place to browse curated lists of the best movies and shows to stream. Find what movie or show to watch next, or start a list so you always have a list of high-quality titles to watch.</CardText>
          </Card>
        </Col>
        <Col sm="3">
          <Card body inverse style={{ backgroundColor: '#191818' }}>
            <CardTitle style={{ color: 'grey'}}>COMPANY</CardTitle>
            <CardText>
              <ul style={{ color: 'grey', fontSize: '0.9rem'}} className="list-unstyled">
                <li>About</li>
                <li>Contact</li>
                <li>Privacy Policy</li>
              </ul>
            </CardText>
          </Card>
        </Col>
        <Col sm="3">
          <Card body inverse style={{ backgroundColor: '#191818' }}>
            <CardTitle style={{ color: 'grey'}}>SOCIAL</CardTitle>
            <CardText>
            <ul style={{ color: 'grey', fontSize: '0.9rem'}} className="list-unstyled">
                <li>Facebook</li>
                <li>twitter</li>
                <li>Instagram</li>
              </ul>
            </CardText>
          </Card>
        </Col>
      </Row>
    </footer>
  );
};
