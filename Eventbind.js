import React, {Component} from "react"

class Eventbind extends Component{

    constructor(){
        super()
        this.state={
            massage:"Hello"
        }
    // this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler = () =>{
        this.setState({
            massage:"Goodby"
        })
    }

    // clickHandler (){
    //     this.setState({
    //         massage:"Goodby"
    //     })
    //     console.log(this)
    // }


    render(){
        return(
            <div>
                <div>{this.state.massage}</div>
                {/* <button onClick={()=>this.clickHandler()}>Click</button> */}
                {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
                <button onClick={this.clickHandler}>Click</button>

            </div>
        )
    }
}
export default Eventbind