import React from "react";
import JobImage from "../JobImage/JobImage";
import JobHeader from "../JobHeader/JobHeader";
import './JobCard.css';


function JobCard(props) {
    return (
        <div className="card jobCard" >
            <JobImage jobImage={props.jobImage} jobTitle={props.jobTitle} />
            <JobHeader jobTitle={props.jobTitle} company={props.company} />
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Distance 5.6 miles       Hourly Rate 13.50</li>
                <li className="list-group-item">Shift Dates</li>
                <li className="list-group-item">Location</li>
                <li className="list-group-item">Requirements</li>
                <li className="list-group-item">Report to</li>
            </ul>
            <div className="card-body">
                <button type="button" className="btn btn-light">Light</button>
                <button type="button" className="btn btn-dark">Dark</button>
            </div>
        </div>
    );
}

export default JobCard;