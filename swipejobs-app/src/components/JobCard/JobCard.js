import React from "react";
import './JobCard.css';


function JobCard() {
    return (
        <div className="card jobCard" >
            <img src="https://imgs.swipejobs.com/js/job-category/construction-1.jpg" className="card-img-top" alt="..."></img>
            <div className="card-body">
                <h5 className="card-title">Construction General Helper</h5>
                <p className="card-text">Steve Smith Construction</p>
            </div>
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