import React from "react"
import "./JobInfoList.css"
import { parseISO } from 'date-fns'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt , faMapMarkerAlt , faTools , faUser} from '@fortawesome/free-solid-svg-icons'

const shiftIcon = <FontAwesomeIcon icon={faCalendarAlt} size="lg" />
const locationIcon = <FontAwesomeIcon icon={faMapMarkerAlt} size="lg" />
const requirementIcon = <FontAwesomeIcon icon={faTools} size="lg" />
const reportIcon = <FontAwesomeIcon icon={faUser} size="lg" />



function JobInfoList(props) {

  const shiftDate = props.shiftDates[0].startDate;
  console.log(shiftDate)
 const shiftDateNew = parseISO(shiftDate);
 console.log(shiftDateNew)
  return (
    <ul className="list-group list-group-flush">
      <li className="list-group-item">
        <div class="row">
          <div class="col-2 align-self-center">
            {shiftIcon}
          </div>
          <div class="col-8">
          <div class="row">
            <a2>Shift Dates</a2>
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
      <li className="list-group-item">
        <div class="row">
          <div class="col-2 align-self-center">
            {locationIcon}
          </div>
          <div class="col-8">
          <div class="row">
            <a2>Location</a2>
            </div>
            <div class="row">
            {props.location}
            </div>
          </div>
        </div>
      </li>
      <li className="list-group-item">
        <div class="row">
          <div class="col-2 align-self-center">
            {requirementIcon}
          </div>
          <div class="col-8">
          <div class="row">
            <a2>Requirements</a2>
            </div>
            <div class="row">
            {props.location}
            </div>
          </div>
        </div>
      </li>
      <li className="list-group-item">
        <div class="row">
          <div class="col-2 align-self-center">
            {reportIcon}
          </div>
          <div class="col-8">
          <div class="row">
            <a2>Report To</a2>
            </div>
            <div class="row">
            {props.reportTo.name} {props.reportTo.phone}
            </div>
          </div>
        </div>
      </li>
    </ul>
  )
}

export default JobInfoList;
