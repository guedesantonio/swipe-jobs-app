import React from "react";

function JobHeader(props) {
  return (
    <div className="card-body">
      <h5 className="card-title">{props.jobTitle}</h5>
      <p className="card-text">{props.company}</p>
    </div>
  )
}

export default JobHeader;
