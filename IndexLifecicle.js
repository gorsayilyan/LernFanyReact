import React, { Component } from 'react'
import { render } from "react-dom"
import UderstudLifecicle from "./UderstudLifecicle"
import Header from "./Header";

class App extends Component {
    constructor() {
        super()
    
        this.state = {
             homelink: "Home",
        } 
    }

    onGreat(){
            alert("Hello!");
        }

    onChangeLinkName(newName){
        this.setState({
            homelink: newName
        });
    }

    render() {
        return (
            <div>
                <div>
                    <Header  initialName={this.state.homelink}/>
                </div>
                <div>
                <UderstudLifecicle 
                name={Gor}
                initialAge={22}
                greet={this.onGreat}
                changeLink={this.onChangeLinkName.bind(this)}
                initialName={this.state.homelink}
                />
                </div>
            </div>
        )
    }
}

render (<App/>,window.document.getElementById("app"))
