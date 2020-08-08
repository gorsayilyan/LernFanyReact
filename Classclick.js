import React, { Component } from 'react'

class Classclick extends Component {
    clickHandler(){
        console.log("Clicked the button");
    }
    render() { 
        return (
            <div>
                <button onClick={this.clickHandler}>Click my</button>
            </div>
        )
    }
}

export default Classclick
