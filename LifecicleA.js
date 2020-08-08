import React, { Component } from 'react'
import LifecicleB from "./LifecicleB"
class LifecicleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: "Gor"
        }
        console.log("LifecicleA constructor")
    }

    static getDerivedStateFromProps(props,state){
        console.log("LifecicleA getDerivedStateFromProps")
        return null
    }

    componentDidMount(){
        console.log("LifecicleA componentDidMount")
    }
    
    shouldComponentUpdate(){
        console.log("LifecicleA shouldComponentUpdate")
        return true
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("LifecicleA getSnapshotBeforeUpdate")
        return null
    }

    componentDidUpdate(){
        console.log("LifecicleA componentDidUpdate")
    }

    changeState = () =>{
        this.setState({
            name:"Conevolution"
        })
    }
    render() {
        console.log("LifecicleA render")
        return (
            <div>
                <div>LifecicleA</div> 
                <button onClick={this.changeState}>Change State</button>  
                <LifecicleB />
            </div>
        )
    }
}

export default LifecicleA
