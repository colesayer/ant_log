import React, { Component } from 'react';
import AntCard from './antCard.js';
import Carousel from 'nuka-carousel';


class AntsList extends Component{
  render(){
    console.log("in ants List", this.props)

    let ants = this.props.ants.map((ant, idx) => <AntCard key={idx} ant={ant} color={this.props.color[idx]}/>)
    return(
      <Carousel easing="easeInOutSine">
        {ants}
      </Carousel>
    )
  }
}

export default AntsList
