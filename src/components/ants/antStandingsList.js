import React, { Component } from 'react';
import AntStandingsCard from './antStandingsCard.js'

class AntStandingsList extends Component{
  render(){
    let ants = this.props.ants.map((ant, idx) => <AntStandingsCard key={idx} ant={ant} count={this.props.ants.length} color={this.props.color[idx]}/>)
    return(
      <div className="ant-standings-list">
        {ants}
      </div>
    )
  }
}

export default AntStandingsList
