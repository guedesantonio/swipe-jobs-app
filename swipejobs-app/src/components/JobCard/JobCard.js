import React from "react";
import JobImage from "../JobImage/JobImage";
import JobHeader from "../JobHeader/JobHeader";
import JobMainInfo from "../JobMainInfo/JobMainInfo";
import './JobCard.css';


function JobCard(props) {
    return (
        <div className="card jobCard" >
            <JobImage jobImage={props.jobImage} jobTitle={props.jobTitle}/>
            <JobHeader jobTitle={props.jobTitle} company={props.company}/>
            <JobMainInfo distance={props.distance} hourlyRateInDollar={props.hourlyRateInDollar}/>
            <ul className="list-group list-group-flush">
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