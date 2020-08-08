import React from 'react'

const Frinput = React.forwardRef((ref) =>{
    return (
        <div>   
            <input type="text" ref={ref}/>
        </div>
    )
    }) 

export default Frinput