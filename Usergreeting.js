import React, {Component} from "react"

class Usergreeting extends Component{
    constructor(props) {
        super(props)
    
        this.state = {
             isLoged: true
        }
    }
    
    render(){
        // return this.state.isLoged && <div>Welcom Gor</div>


        return this.state.isLoged?<div>Welcom Gor</div>:<div>Welcom Guests</div>


        // let massage;
        // if(this.state.isLoged){
        //     massage = <div>Welcom Gor</div>
        // }else{
        //     massage = <div>Welcom Guests</div>
        // }
        // return <div>{massage}</div>


        // if(this.state.isLoged){
        //     return(<div>Welcom Gor</div>)
        // } else{
        //     return(<div>Welcom Guests</div>)
        // }     
    }
}
export default Usergreeting
