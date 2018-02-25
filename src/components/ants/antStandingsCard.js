import React, { Component } from 'react';

class AntStandingsCard extends Component{
  render(){
    let divHeight = (100 / this.props.count).toString() + "%"
    return(
      <div className="ant-standing-card" style={{height: `${divHeight}`, backgroundColor: `${this.props.color}`}}>

          <span className="img-helper"></span>
          <img src="http://res.cloudinary.com/dwnehv6tb/image/upload/v1519593709/ant-race2_nopsbv.png"/>
      </div>
    )
  }
}

export default AntStandingsCard
