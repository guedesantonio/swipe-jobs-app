import React from "react";

function JobMainInfo(props) {
  return (
    <div className="card-body">
      <p className="card-text">{props.distance}</p>
      <p className="card-text">{props.hourlyRateInDollar}</p>
    </div>
  )
}

export default JobMainInfo;
