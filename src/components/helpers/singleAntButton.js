import React from 'react'

const SingleAntButton = (props) => {
  return <button type="button" disabled={props.calculated} className="calculate-button" onClick={props.handleOdds}>Calculate Odds</button>
};

export default SingleAntButton
