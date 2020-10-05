import React from "react"
import "./JobInfoList.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, faMapMarkerAlt, faTools, faUser } from '@fortawesome/free-solid-svg-icons'
import { formatShiftDate } from '../../utils/Utils';

const shiftIcon = <FontAwesomeIcon icon={faCalendarAlt} size="lg" />
const locationIcon = <FontAwesomeIcon icon={faMapMarkerAlt} size="lg" />
const requirementIcon = <FontAwesomeIcon icon={faTools} size="lg" />
const reportIcon = <FontAwesomeIcon icon={faUser} size="lg" />

function JobInfoList(props) {

  const renderShiftDates = () => {
    if (props.shiftDates && props.shiftDates.length > 0) {
      return props.shiftDates.map(shiftDate => {
        return (
          <div key={shiftDate.startDate} className="row">
            {formatShiftDate(shiftDate.startDate, shiftDate.endDate)}
          </div>)
      })
    }
    return null;
  }

  const renderRequirements = () => {
    if (props.requirements && props.requirements.length > 0) {
      return props.requirements.map(requirement => <li key={requirement}>{requirement}</li>);
    };
    return <li>No requirements for this position.</li>
  };

  return (

    <ul className="list-group list-group-flush">
      <li className="list-group-item">
        <div className="row">
          <div className="col-2 align-self-center">
            {shiftIcon}
          </div>
          <div className="col-8">
            <div className="row">
              <a2>Shift Dates</a2>
            </div>
            <div className="row">
              {renderShiftDates()}
            </div>
          </div>
        </div>
      </li>
      <li className="list-group-item">
        <div className="row">
          <div className="col-2 align-self-center">
            {locationIcon}
          </div>
          <div className="col-8">
            <div className="row">
              <a2>Location</a2>
            </div>
            <div className="row">
              {props.location}
            </div>
          </div>
        </div>
      </li>
      <li className="list-group-item">
        <div className="row">
          <div className="col-2 align-self-center">
            {requirementIcon}
          </div>
          <div className="col-8">
            <div className="row">
              <a2>Requirements</a2>
            </div>
            <div className="row">
              <ul>
                {renderRequirements()}
              </ul>
            </div>
          </div>
        </div>
      </li>
      <li className="list-group-item">
        <div className="row">
          <div className="col-2 align-self-center">
            {reportIcon}
          </div>
          <div className="col-8">
            <div className="row">
              <a2>Report To</a2>
            </div>
            <div className="row">
              {props.reportTo.name} {props.reportTo.phone}
            </div>
          </div>
        </div>
      </li>
    </ul>
  )
}

export default JobInfoList;
