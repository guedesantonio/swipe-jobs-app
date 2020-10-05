import React from "react";
import "./JobMainInfo.css"

function JobMainInfo(props) {
  return (
    <div className=" main-info">
      <div class="row">
        <div class="col-auto mr-auto"><a1>Distance</a1></div>
        <div class="col-auto"><a1>Hourly Rate</a1></div>
        <div class="w-100"></div>
        <div class="col-auto mr-auto"><p1 className="card-text">{props.distance} miles</p1></div>
  <div class="col-auto"><p1 className="card-text">${props.hourlyRateInDollar}</p1></div>
      </div>
      
      
    </div>
  )
}

export default JobMainInfo;
