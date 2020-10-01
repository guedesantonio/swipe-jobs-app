import React, { useState, useEffect } from "react";
import JobCard from "../JobCard/JobCard";
import axios from "axios";
import { Carousel } from "react-bootstrap";


function JobCarousel(props) {
    const MATCHES_URL = `https://test.swipejobs.com/api/worker/${props.workerId}/matches`;
    const [jobList, setJobList] = useState();

    useEffect(() => {
        axios.get(MATCHES_URL).then(res => {
            setJobList(res.data);
        })
    },[]);

    return (
        <div>
            <div className='container-fluid' >
                <div className="row">
                    <div className="col-12">
                        <Carousel>
                            <Carousel.Item>
                                <JobCard />
                            </Carousel.Item>

                            <Carousel.Item>
                                <JobCard />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default JobCarousel;