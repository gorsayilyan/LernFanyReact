import React from 'react'

function Childcomponent(props) {
    return (
        <div> 
            {/* <button onClick={props.greeatHandler}>Greed Parent</button> */}
            <button onClick={() => props.greeatHandler("tonacar")}>Greed Parent</button>
        </div>
    )
}

export default Childcomponent
