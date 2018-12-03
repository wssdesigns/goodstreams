import React from 'react'
import addToHomeScreen from '../../img/add-to-homescreen.gif';

export default () => {
  return (
    <div className="about">
     <div className="container" style={{marginBottom: '100px'}}>
      <div className="row">
        <div className="col-md-12">
          <p className="text-left">
            Follow these steps to create a GoodStreams icon on your iPhone
          </p>
          <div>
          <img src={addToHomeScreen} style={{height: 'auto', width: '60%', marginBottom: '50px'}} alt="add-to-homescreen logo"></img>
        </div>
        </div>
      </div>
    </div>
  </div>
  )
}
