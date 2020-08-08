import React,{ Component } from "react"

class Massage extends Component{

    constructor(){
        super()
        this.state={
            massage:"Welcom visitor"
        }
    } 

    changeMasage(){
        this.setState({
            massage:"Thank you for Subscribing"
        })
    }

    
    render(){
    return (
        <div>
            <h1>{this.state.massage}</h1>
            <button onClick={() => this.changeMasage()}>Subscribe</button>
        </div>
    )
    }
}

export default Massage