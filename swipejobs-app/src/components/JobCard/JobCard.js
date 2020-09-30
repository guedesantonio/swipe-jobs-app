import React from "react";



function JobCard() {
    return (
        <div class="card" >
            <img src="https://imgs.swipejobs.com/js/job-category/construction-1.jpg" class="card-img-top" alt="..."></img>
            <div class="card-body">
                <h5 class="card-title">Construction General Helper</h5>
                <p class="card-text">Steve Smith Construction</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Cras justo odio</li>
                <li class="list-group-item">Dapibus ac facilisis in</li>
                <li class="list-group-item">Vestibulum at eros</li>
            </ul>
            <div class="card-body">
                <a href="#" class="card-link">Card link</a>
                <a href="#" class="card-link">Another link</a>
            </div>
        </div>
    );
}

export default JobCard;