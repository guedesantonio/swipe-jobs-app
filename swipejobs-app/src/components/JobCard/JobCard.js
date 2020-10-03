import React, { useState, useEffect } from "react";
import axios from "axios";
import JobImage from "../JobImage/JobImage";
import JobHeader from "../JobHeader/JobHeader";
import JobMainInfo from "../JobMainInfo/JobMainInfo";
import JobInfoList from "../JobInfoList/JobInfoList";
import JobButton from "../JobButton/JobButton";
import './JobCard.css';



function JobCard(props) {
    const ACCEPT_URL = `https://test.swipejobs.com/api/worker/${props.workerId}/job/${props.jobId}/accept`;
        const [acceptList, setAcceptList] = useState([]);
    function AcceptJob() {

    
        useEffect(() => {
            axios.get(ACCEPT_URL).then(res => {
                setAcceptList(res.data);
    
            })
        }, []);
    
    }
   console.log(acceptList);
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
                <JobButton theme="light"/>
                <JobButton theme="dark" />
            </div>
        </div>
    );
}

export default JobCard;