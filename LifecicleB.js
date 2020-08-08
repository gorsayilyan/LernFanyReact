import React, { Component } from 'react'

class LifecicleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: "Gor"
        }
        console.log("LifecicleB constructor")
    }

    static getDerivedStateFromProps(props,state){
        console.log("LifecicleB getDerivedStateFromProps")
        return null
    }
    
    componentDidMount(){
        console.log("LifecicleB componentDidMount")
    }

    shouldComponentUpdate(){
        console.log("LifecicleB shouldComponentUpdate")
        return true
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("LifecicleB getSnapshotBeforeUpdate")
        return null
    }

    componentDidUpdate(){
        console.log("LifecicleB componentDidUpdate")
    }

    render() {
        console.log("LifecicleB render")
        return (
            <div>
                LifecicleB
            </div>
        )
    }
}

export default LifecicleB