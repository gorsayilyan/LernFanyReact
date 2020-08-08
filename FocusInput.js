import React, { Component } from 'react'
import Input from "./Input"

class FocusInput extends Component {
    constructor(props) {
        super(props) 
        this.componentRef = React.createRef()
    }
    clickhandler = () =>{
        this.componentRef.current.focusInput()
    }
    render() {
        return (
            <div>
                <Input ref={this.componentRef} />
                <button onClick={this.clickhandler}>Focus input</button>
                {/* <button onClick={this.clickhandler.bind(this)}>Focus input</button> */}
                {/* <button onClick={() => this.clickhandler()}>Focus input</button> */}

            </div>
        )
    }
}

export default FocusInput
