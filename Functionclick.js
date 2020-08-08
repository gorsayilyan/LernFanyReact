import React from 'react'

function Functionclick() {
    function clickHandler(){
        console.log("button clicked");
    }
    return (
        <div>
            <button onClick = {clickHandler}>click</button>
        </div>
    )
}

export default Functionclick
