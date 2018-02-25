import React from 'react'

const AllAntsButton = (props) => {
  return <button type="button" disabled={props.calculated} className="calculate-all-button" onClick={props.handleAllOdds}>Calculate All Odds</button>
};

export default AllAntsButton
