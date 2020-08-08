import React, { Component } from 'react'
import Childcomponent from './Childcomponent'

class Parentcomponent extends Component{
    constructor(props){
        super(props) 
        this.state={
            parentName:"Parent" 
        }
        this.greeatParent=this.greeatParent.bind(this)
    }

    greeatParent(childName){
        alert(`Hello ${this.state.parentName} from ${childName}`)
    }
    render(){
        return(
            <div>
                <Childcomponent greeatHandler={this.greeatParent}/>
            </div>
        )
    }
}
export default Parentcomponent