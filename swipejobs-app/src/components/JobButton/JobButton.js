import React from "react";


function JobButton(props) {
    const theme = `btn btn-${props.theme}`
    return (
        <button 
        type="button" 
        className={theme}>
            {props.theme}
        </button>
    )
}

export default JobButton;
