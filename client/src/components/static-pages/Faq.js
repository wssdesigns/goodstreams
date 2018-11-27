import React from 'react'
import addToHomeScreen from '../../img/add-to-homescreen.gif';

export default () => {
  return (
    <div className="about">
     <div className="container">
      <div>
        <div>
          <h3 className="text-left">FAQ</h3>
          <h5 style={{fontStyle: 'italic'}}>How can I request a feature?</h5>
          <div>Thanks for your interest in improving the service! Please message us at goodstreamsio at gmail.com</div>
          <br/>
          <h5 style={{fontStyle: 'italic'}}>What features are in the pipeline?</h5>
          <ul>
            <li>Keep a list of titles you've watched.</li>
            <li>Friend members.</li>
            <li>Receive notifications when friends add new titles to their watchlists.</li>
          </ul>
          <h5 style={{fontStyle: 'italic'}}>What other services and hardware do you recomend for streaming?</h5>
          Research what to watch
          <ul>
            <li><a href="https://reelgood.com/">ReelGood</a></li>
            <li><a href="https://instantwatcher.com/">InstantWatcher</a></li>
          </ul>
          Hardware
          <ul>
            <li><a href="https://www.roku.com/">Roku</a></li>
          </ul>
        </div>
        <h5 style={{fontStyle: 'italic'}}>How do I add an icon to the homescreen on my phone?</h5>
        <div>
          <img src={addToHomeScreen} style={{height: 'auto', width: '50%', marginBottom: '50px'}} alt="add-to-homescreen logo"></img>
        </div>
      </div>
    </div>
  </div>
  )
}
