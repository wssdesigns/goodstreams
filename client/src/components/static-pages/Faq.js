import React from 'react'

export default () => {
  return (
    <div className="about">
     <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h3 className="text-left">FAQ</h3>
          <p className="lead text-left">
            You've got questions. We've got answers.
          </p>
          <div style={{fontStyle: 'italic'}}>How can I request a feature?</div>
          <div>Thanks for your interest in improving the service! Please message us at goodstreamsio at gmail.com</div>
          <br/>
          <div style={{fontStyle: 'italic'}}>What features are in the pipeline?</div>
          <ul>
            <li>Keep a list of titles you've watched.</li>
            <li>Friend members.</li>
            <li>Receive notifications when friends add new titles to their watchlists.</li>
          </ul>
          <br/>
          <div style={{fontStyle: 'italic'}}>What other services and hardware do you recomend for streaming?</div>
          <ul>
            Research what to watch:
            <li><a href="https://reelgood.com/">ReelGood</a></li>
            <li><a href="https://instantwatcher.com/">InstantWatcher</a></li>
          </ul>
          <ul>
            Hardware
            <li><a href="https://www.roku.com/">Roku</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  )
}
