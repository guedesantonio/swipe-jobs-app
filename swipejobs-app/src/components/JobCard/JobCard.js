import React from "react";
import JobImage from "../JobImage/JobImage";
import JobHeader from "../JobHeader/JobHeader";
import JobMainInfo from "../JobMainInfo/JobMainInfo";
import JobInfoList from "../JobInfoList/JobInfoList";
import './JobCard.css';


function JobCard(props) {
    return (
        <div className="card jobCard" >
            <JobImage 
                jobImage={props.jobImage} 
                jobTitle={props.jobTitle}
            />
            <JobHeader 
                jobTitle={props.jobTitle} 
                company={props.company}
            />
            <JobMainInfo 
                distance={props.distance} 
                hourlyRateInDollar={props.hourlyRateInDollar}
            />
            <JobInfoList 
                shiftDates={props.shiftDates}
                location={props.location}
                reportTo={props.reportTo}
            />
            <div className="card-body">
                <button type="button" className="btn btn-light">Light</button>
                <button type="button" className="btn btn-dark">Dark</button>
            </div>
        </div>
    );
}

export default JobCard;