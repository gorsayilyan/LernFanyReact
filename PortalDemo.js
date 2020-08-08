import React from 'react'
import ReactDOM from "react-dom"

function PortalDemo() {
    return (
    ReactDOM.createPortal(
        <h1>Portals demo</h1>,
        document.getElementById("portal-root"))
    
    // <h1>
    //     Portal demo
    // </h1>
    )
}

export default PortalDemo
