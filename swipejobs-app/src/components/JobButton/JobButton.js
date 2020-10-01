import React from "react";
import { useAlert } from 'react-alert'

function JobButton(props) {
    const alert = useAlert()

    const theme = `btn btn-${props.theme}`
    return (
        <button
        onClick={() => {
            alert.show('Oh look, an alert!')
          }}
        type="button" 
        className={theme}>
            {props.theme}
        </button>
    )
}

export default JobButton;
