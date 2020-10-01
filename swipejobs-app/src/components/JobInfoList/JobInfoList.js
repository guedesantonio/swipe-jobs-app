import React from "react";

function JobInfoList(props) {
  return (
    <ul className="list-group list-group-flush">
      <li className="list-group-item">Shift Dates: {props.shiftDates[0].startDate} </li>
      <li className="list-group-item">{props.location}</li>
      <li className="list-group-item">Requirements: -Safety Vest -Hard hat</li>
      <li className="list-group-item">{props.reportTo.name} {props.reportTo.phone}</li>
    </ul>
  )
}

export default JobInfoList;
