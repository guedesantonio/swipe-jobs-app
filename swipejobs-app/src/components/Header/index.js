import React from "react";
// main header for the page
function Header(props) {
    return (
        <header className="header">
            <nav className="navbar navbar-dark bg-dark">
                <a className="navbar-brand" href="https://www.swipejobs.com/">
                    <img src="../img/swipeJobsLogo.png" className="logo" alt="swipejobs-logo"></img>
                </a>
                <span className="navbar-text text-white">
                    <b>{props.workerProfile.firstName} {props.workerProfile.lastName}</b>
                </span>
            </nav>
        </header>
    );
}

export default Header;