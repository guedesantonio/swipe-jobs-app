import React from "react";
import "./JobMainInfo.css"

function JobMainInfo(props) {
  return (
    <div className=" main-info">
      <div className="row">
        <div className="col-auto mr-auto"><a1>Distance</a1></div>
        <div className="col-auto"><a1>Hourly Rate</a1></div>
        <div className="w-100"></div>
        <div className="col-auto mr-auto"><p1 className="card-text">{props.distance} miles</p1></div>
  <div class="col-auto"><p1 className="card-text">${props.hourlyRateInDollar}</p1></div>
      </div>
      
      
    </div>
  )
}

export default JobMainInfo;
