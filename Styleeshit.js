import React from 'react'
import "./myStyles.css"
function Styleeshit(props) {
    let className = props.primry? "primry":""
    return (
        <div>
            <h1 className={`${className} font-xl`}>Stylesshit</h1>
        </div>
    ) 
}
export default Styleeshit 

