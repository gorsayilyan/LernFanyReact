import React, { Component } from 'react'
import hom1 from "./pictures/hom1.jpg";
import hom2 from "./pictures/hom2.jpg";
import hom3 from "./pictures/hom3.jpg";
import hom4 from "./pictures/hom4.jpg";
import hom5 from "./pictures/hom5.jpg";
import hom6 from "./pictures/hom6.jpg";
import hom7 from "./pictures/hom7.jpg";
import hom8 from "./pictures/hom8.jpg";
import hom9 from "./pictures/hom9.jpg";

// import createBrowserHistory from "history/createBrowserHistory";
// const history = createBrowserHistory();
// import pictures from "./components/pictures"
let arr=[
    {
        id:"1",
     img:hom1,
     text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, ut saepe magni cum commodi "

},
{
   id:"2",
img:hom2,
text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, ut saepe magni cum commodi "

},
{
   id:"3",
img:hom3,
text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, ut saepe magni cum commodi "

}, 
{
   id:"4",
img:hom4,
text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, ut saepe magni cum commodi "

},
{
   id:"5",
img:hom5,
text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, ut saepe magni cum commodi "

}, 
{
   id:"6",
img:hom6,
text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, ut saepe magni cum commodi "

},
{
   id:"7",
img:hom7,
text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, ut saepe magni cum commodi "

},
{
   id:"8",
img:hom8,
text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, ut saepe magni cum commodi "

}, 
{
   id:"9",
img:hom9,
text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, ut saepe magni cum commodi "

}
]

class Pp extends Component {
    render() {
         const amenamec = {
            width:"60%",
            height:"100vh",
             overflow: "scroll",
         }
         const mec={
             width: "100%",
            height: "140px",
            border: "1px solid black"
         }
         const nkar ={
            width : "98px",
            height: "98px",
         }
         const p1={
            display: "inline",
         }
        return (
            

    <div style={amenamec}>
    { arr.map(({id,img,text})=>(
            <div key={id} style={mec}>
            <img src={img} style={nkar} />
            <p style={p1}>{text}
            {/* {console.log(id,img,text)} */}
            </p>
            </div>
        ))}
    </div>            
     
    )
            }
                    }
export default Pp