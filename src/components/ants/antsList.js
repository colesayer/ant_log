import React, { Component } from 'react';
import AntCard from './antCard.js';
import Carousel from 'nuka-carousel';


class AntsList extends Component{
  render(){
    let ants = this.props.ants.map((ant, idx) => <AntCard key={idx} ant={ant} idx={idx} updateOdds={this.props.updateOdds} odds={this.props.odds[idx]} color={this.props.color[idx]}/>)
    return(
      <Carousel easing="easeInOutSine">
        {ants}
      </Carousel>
    )
  }
}

export default AntsList
