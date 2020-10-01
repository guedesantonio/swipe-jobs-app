import React, { useState, useEffect } from "react";
import JobCard from "../JobCard/JobCard";
import axios from "axios";
import { Carousel } from "react-bootstrap";


function JobCarousel(props) {
    const MATCHES_URL = `https://test.swipejobs.com/api/worker/${props.workerId}/matches`;
    const [jobList, setJobList] = useState([]);

    useEffect(() => {
        axios.get(MATCHES_URL).then(res => {
            setJobList(res.data);

        })
    }, []);
    return (
        <div>
            <div className='container-fluid' >
                <div className="row">
                    <div className="col-12">
                        <Carousel>
                            {jobList.map(worker => (
                                <Carousel.Item >
                                    <JobCard
                                        key={worker.jobId}
                                        jobImage={worker.jobTitle.imageUrl}
                                        jobTitle={worker.jobTitle.name}
                                        company={worker.company.name}
                                        distance={(worker.milesToTravel).toFixed(2)}
                                        hourlyRateInDollar={(worker.wagePerHourInCents / 100).toFixed(2)}
                                        shiftDates={worker.shifts}
                                        location={worker.company.address.formattedAddress}
                                        reportTo={worker.company.reportTo}
                                    />
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default JobCarousel;