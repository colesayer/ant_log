import React, { Component } from 'react';
import AntStandingsList from './antStandingsList.js'
import AllAntsButton from '../helpers/allAntsButton.js'
import { generateAntWinLikelihoodCalculator } from '../helpers/generateLikelihood.js'

class AntStandingsContainer extends Component{

  state = {
    clicked: false,
  }

  handleAllOdds = () => {
    this.setState({
      clicked: true
    })

    for (let i = 0; i < this.props.ants.length; i++){
      generateAntWinLikelihoodCalculator()(res => {
        this.props.updateOdds(res, i)
      })
    }
  }

  findWinner = () => {
    console.log("WINNER", this.props)
    let maxVal = 0
    let maxIdx = ""
    for(let idx in this.props.odds){
      if(this.props.odds[idx] > maxVal){
        maxVal = this.props.odds[idx]
        maxIdx = idx
      }
    }

    return this.props.ants[maxIdx]
  }

  render(){
    let message = "The Race Is About To Begin!"
    let oddsLength = Object.keys(this.props.odds).length
    let winner
    let calcSwitch = false


    if( oddsLength === this.props.ants.length){
      winner = this.findWinner().name
      console.log("winner:", winner)
      calcSwitch = true
      message = `${winner} Is Most Likely To Win!`
    } else if (this.state.clicked){
      message = "The Odds Are Being Calculated..."
      calcSwitch = true
    } else if ( oddsLength > 0 ){
      message = "In Progress: Click Below To Calculate The Rest..."
    }

    return(
      <div className="ant-standings-container">
        <div className="race-message">
          <h1>{message}</h1>
        </div>
        <div className="ants-race-track">
          <div className="starting-line"></div>
          <div className="finish-line"></div>
          <AntStandingsList ants={this.props.ants} odds={this.props.odds} color={this.props.color}/>
        </div>
        <div className="all-ants-button">
          <AllAntsButton handleAllOdds={this.handleAllOdds} calculated={calcSwitch}/>
        </div>
      </div>
    )
  }
}


export default AntStandingsContainer
