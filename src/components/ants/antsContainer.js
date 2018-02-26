import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import AntsList from './antsList.js'
import AntStandingsContainer from './antStandingsContainer.js'
import LoadingContainer from '../loading/loadingContainer.js'
import RandomColor from 'randomcolor'

class AntsContainer extends Component{

  state = {
    odds: {},
    colors: []
  }

  updateOdds = (chances, idx) => {
    let newObj = this.state.odds
    if(newObj[idx]){
      return
    } else {
      newObj[idx] = chances
      this.setState({
        odds: newObj
      })
    }
  }

  componentWillReceiveProps(nextProps){
    if(this.props.antsQuery.ants !== nextProps.antsQuery.ants){
      let count = nextProps.antsQuery.ants.length
      let randomColors = RandomColor({luminosity: 'light', count: count})
      this.setState({
        colors: randomColors
      })
    }
  }

  render(){
    let antCarousel
    let antStandings
    
    if(!this.props.antsQuery.ants){
      antCarousel = <LoadingContainer/>
      antStandings = <LoadingContainer/>
    } else {
      antCarousel = <AntsList ants={this.props.antsQuery.ants} color={this.state.colors} odds={this.state.odds} updateOdds={this.updateOdds} />
      antStandings = <AntStandingsContainer ants={this.props.antsQuery.ants} color={this.state.colors} odds={this.state.odds} updateOdds={this.updateOdds}/>
    }
    return(
      <div className="ants-container">
        <div className="ants-carousel-container">
          {antCarousel}
        </div>
        <div className="ants-standings-container">
          {antStandings}
        </div>
      </div>
    )
  }
}

const ANTS_QUERY = gql`
  query AntsQuery {
    ants {
      name
      length
      weight
      color
    }
  }
  `

export default graphql(ANTS_QUERY, { name: 'antsQuery' })(AntsContainer)
