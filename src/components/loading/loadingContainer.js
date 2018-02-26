import React, { Component } from 'react';

class LoadingContainer extends Component{
  render(){
    return(
      <div className="loading-container">
        <div>
          <h1>Loading!</h1>
        </div>
        <div className="loading-animation">
          <div className="loading-img-container">
            <span className="img-helper"></span>
            <img src="http://res.cloudinary.com/dwnehv6tb/image/upload/v1519580698/ant-clipart-dcr6A6qc9_x6qsac.png"/>
          </div>
        </div>
      </div>
    )
  }
}

export default LoadingContainer
