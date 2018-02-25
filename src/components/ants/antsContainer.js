import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import AntsList from './antsList.js'
import AntStandings from './antStandings.js'
import AllAntsButton from '../helpers/allAntsButton.js'
import LoadingContainer from '../loading/loadingContainer.js'
import RandomColor from 'randomcolor'

class AntsContainer extends Component{
  render(){
    console.log("ANTS?", this.props.antsQuery.ants)

    let antCarousel
    let antStandings
    let count
    let antColors

    if(!this.props.antsQuery.ants){
      antCarousel = <LoadingContainer/>
      antStandings = <LoadingContainer/>
      count = 0
    } else {
      count = this.props.antsQuery.ants.length
      antColors = RandomColor({luminosity: 'light', count: count})
      antCarousel = <AntsList ants={this.props.antsQuery.ants} color={antColors}/>
      antStandings = <AntStandings ants={this.props.antsQuery.ants} color={antColors}/>
    }
    return(
      <div className="ants-container">
        <div className="ants-carousel-container">
          {antCarousel}
        </div>
        <div className="ants-standings-container">
          {antStandings}
          <AllAntsButton/>
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
