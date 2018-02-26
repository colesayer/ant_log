import React, { Component } from 'react';
import SingleAntButton from '../helpers/singleAntButton.js'
import { generateAntWinLikelihoodCalculator } from '../helpers/generateLikelihood.js'

class AntCard extends Component{
  state = {
    odds: "Not Yet Calculated",
    calculated: false,
  }

  handleOdds = () => {
    this.setState({
      odds: "Calculating..."
    })
    generateAntWinLikelihoodCalculator()(res => {
      this.props.updateOdds(res, this.props.idx)
      this.setState({
        odds: res,
        calculated: true
      })
    })
  }

  componentWillReceiveProps(nextProps){
    if(this.props.odds !== nextProps.odds){
      this.setState({
        odds: nextProps.odds,
        calculated: true
      })
    }
  }
  render(){
    const { ant } = this.props
    return(
      <div className="ants-carousel-content" style={{backgroundColor: `${this.props.color}`}}>
        <span className="img-helper"></span>
        <img alt="ant graphic" src="https://res.cloudinary.com/dwnehv6tb/image/upload/v1519580698/ant-clipart-dcr6A6qc9_x6qsac.png" />
        <div className="ants-carousel-info">
          <div className="ant-text">
            <div>
              <h1>{ant.name}</h1>
            </div>
            <div className="ant-info">
              <p>
                Length:{" "}{ant.length}
              </p>
              <p>
                Weight:{" "}{ant.weight}
              </p>
              <p>
                Color:{" "}{ant.color}
              </p>
              <p>
                Odds:{" "}{this.state.odds}
              </p>
            </div>
            <div className="button-helper">
              <SingleAntButton handleOdds={this.handleOdds} calculated={this.state.calculated}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AntCard
