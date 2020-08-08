import React, { Component } from 'react'
import UpdateComponent from "./withCounter"

class HoverCounter extends Component {
     render() {
        const { count , incrementCount} = this.props;
        return (
            <div>
                <h2 onMouseOver={incrementCount}> Hoverd {count} items</h2>
            </div>
        )
    }
}

export default UpdateComponent(HoverCounter,5)
