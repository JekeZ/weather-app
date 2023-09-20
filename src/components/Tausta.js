import React from "react";
function backGround(props) {
    // Määritellään kosteus arvo propseista.
    const { humidity } = props
    // Määritetään, jos kosteusarvo on vähemmän kun 60, on sivun taustaväri sininen, muulloin vihreä.
    const backgroundColor = humidity < 60 ? 'navy': 'green';
    document.body.style.backgroundColor = backgroundColor
    return (
        null
    )
}

export default backGround;