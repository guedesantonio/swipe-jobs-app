import React from "react"
import "./JobInfoList.css"
import { parseISO } from 'date-fns'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'

const icon = <FontAwesomeIcon icon={faCalendarAlt} size="lg" />



function JobInfoList(props) {

  const shiftDate = props.shiftDates[0].startDate;
  console.log(shiftDate)
 const shiftDateNew = parseISO(shiftDate);
 console.log(shiftDateNew)
  return (
    <ul className="list-group list-group-flush">
      <li className="list-group-item">
        <div class="row">
          <div class="col-2">
            {icon}
          </div>
          <div class="col-8">
          <div class="row">
            <a2>Shift Dates:</a2>
            </div>
            <div class="row">
              {props.shiftDates[0].startDate} 
            </div>
            <div class="row">
              {props.shiftDates[0].startDate} 
            </div>
          </div>
        </div>
      </li>
      <li className="list-group-item">{props.location}</li>
      <li className="list-group-item">Requirements: -Safety Vest -Hard hat</li>
      <li className="list-group-item">{props.reportTo.name} {props.reportTo.phone}</li>
    </ul>
  )
}

export default JobInfoList;
