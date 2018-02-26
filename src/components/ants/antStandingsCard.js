import React, { Component } from 'react';

class AntStandingsCard extends Component{
  render(){
    let divHeight = (100 / this.props.count).toString() + "%"
    let standing = (Math.ceil(this.props.odds * 100)).toString() + "%"
    return(
      <div className="ant-standing-card" style={{height: `${divHeight}`, backgroundColor: `${this.props.color}`}}>
        <div className="ant-standing-card-text">
          <h1>{this.props.ant.name}</h1>
          <span className="img-helper"></span>
          <img alt="ant graphic" style={{marginLeft: `${standing}`}} src="http://res.cloudinary.com/dwnehv6tb/image/upload/v1519593709/ant-race2_nopsbv.png"/>
        </div>

      </div>
    )
  }
}

export default AntStandingsCard
