import React, { Component } from 'react';
import AntsContainer from './components/ants/antsContainer.js'
import TitleBarContainer from './components/titlebar/titleBarContainer.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <TitleBarContainer />
        <AntsContainer />
      </div>
    );
  }
}

export default App;
