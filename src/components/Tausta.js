import React from "react";
function backGround(props) {
    const { humidity } = props

    const backgroundColor = humidity < 60 ? 'navy': 'green';
    document.body.style.backgroundColor = backgroundColor
    return (
        null
    )
}

export default backGround;