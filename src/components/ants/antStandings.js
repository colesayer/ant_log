import React, { Component } from 'react';
import AntStandingsList from './antStandingsList.js'

class AntStandings extends Component{
  render(){
    return(
      <div className="ants-race-track">
        <div className="starting-line">
        </div>
        <AntStandingsList ants={this.props.ants} color={this.props.color}/>
        <div className="finish-line">
        </div>
      </div>
    )
  }
}

export default AntStandings
