import React, {Component} from "react"

const UpdateComponent = (OrginalComponent, incrementNumber) =>{
    class NewComponent extends Component{
        constructor(props) {
            super(props)
        
            this.state = {
                 count: 0
            }
        }
        incrementCount = () =>{
            this.setState(prevState =>{
                return {count:prevState.count + incrementNumber}
            })
        }
        
        render(){
            // console.log(this.props.name);
            return(
            <OrginalComponent
             count = {this.state.count} 
             incrementCount = {this.incrementCount}
             {...this.props}
             />)
        }
    }
    return NewComponent
}

export default UpdateComponent