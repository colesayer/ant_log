import React, { Component } from 'react';
import SingleAntButton from '../helpers/singleAntButton.js'
import { generateAntWinLikelihoodCalculator } from '../helpers/generateLikelihood.js'

class AntCard extends Component{
  state = {
    odds: "not yet run",
    calculated: false,
  }

  handleOdds = () => {
    this.setState({
      odds: "running"
    })
    generateAntWinLikelihoodCalculator()(res => {
      console.log(res)
      this.setState({
        odds: res,
        calculated: true
      })
    })

  }
  render(){
    const { ant } = this.props
    let odds

    return(
      <div className="ants-carousel-content" style={{backgroundColor: `${this.props.color}`}}>
        <span className="img-helper"></span>
        <img src="http://res.cloudinary.com/dwnehv6tb/image/upload/v1519580698/ant-clipart-dcr6A6qc9_x6qsac.png" />
        <div className="ants-carousel-info">
          <div>
            <h1>{ant.name}</h1>
          </div>
          <div>
            Length:
            {ant.length}
          </div>
          <div>
            Weight:
            {ant.weight}
          </div>
          <div>
            Color:
            {ant.color}
          </div>
          <div>
            Odds:
            {this.state.odds}
          </div>
          <div>
            <SingleAntButton handleOdds={this.handleOdds} calculated={this.state.calculated}/>
          </div>
        </div>
      </div>
    )
  }
}

export default AntCard
//
