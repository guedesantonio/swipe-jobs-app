import React from "react";
import JobCard from "../JobCard/JobCard";
import { Carousel } from 'react-bootstrap';


function JobCarousel() {
    return (
        <div>
            <div className='container-fluid' >
                <div className="row">
                    <div className="col-12">
                        <Carousel>
                            <Carousel.Item>
                               <JobCard/>
                            </Carousel.Item>

                            <Carousel.Item>
                            <JobCard/>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default JobCarousel;