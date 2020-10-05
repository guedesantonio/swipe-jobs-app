import React, { useState, useEffect } from "react";
import { JobService } from '../../services/JobService';
import JobImage from "../JobImage/JobImage";
import JobHeader from "../JobHeader/JobHeader";
import JobMainInfo from "../JobMainInfo/JobMainInfo";
import JobInfoList from "../JobInfoList/JobInfoList";
import JobButton from "../JobButton/JobButton";


function JobCard(props) {
    const [acceptList, setAcceptList] = useState([]);
    const [rejectList, setRejectList] = useState([]);

    useEffect(async () => {
      const acceptList = await JobService.getAcceptList(props.jobId)
      if (acceptList) {
        setAcceptList(acceptList);
      }
      const rejectList = await JobService.getRejectList();
      if (rejectList) {
          setRejectList(rejectList);
      }
    }, []);

    const acceptMessage = (acceptList.message ? acceptList.message : "Thanks, position accepted successfully.");
    const rejectMessage = "Thanks, position rejected successfully.";

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
                requirements={props.requirements}
            />
            <div className="card-body d-flex justify-content-around">
                <JobButton theme="light" message={rejectMessage} name={"No Thanks"}/>   
                <JobButton theme="dark" message={acceptMessage} name={"I'II Take it"}/>
            </div>
        </div>
    );
}

export default JobCard;