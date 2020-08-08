// import React, { Component } from 'react'


// class Parent extends Component{
//     constructor(props) {
//         super(props)
//         this.state = {
//             content:"",
//         }
//         this.handleChange=this.handleChange.bind(this)
//     }
    
//     handleChange = (param) =>{
//      this.setState({ content: param })
//     }

//     render(){
//         return(
//             <div>
//                 {this.state.content}
//                 <hr/>
//                 <LiftingState childname={this.handleChange}/>
//             </div>
//         )
//     }
// }



// class LiftingState extends Component {
//     constructor(props) {
//         super(props)
//     }
    
//     handleChandeUsername = (event) =>{
//         this.props.childname(event.target.value);
//     }
    
//     render() {
//         return (
//             <div>
//                 <input 
//                     type="text" 
//                     value={this.username}
//                     onChange={this.handleChandeUsername}
//                 />
//             </div>
//         )
//     }
// }

// export default Parent








import React, { Component } from 'react'

class Parent extends Component{
    constructor(props) {
        super(props)
        this.state = {
            firstname:"Gor",
            lastName:"Sayilyan",
        }
        this.content=null;
    }

    render(){
        return(
            <div>
                <button onClick={() => console.log(this.content)}>ccc</button>
                <br/>
                {this.content}
                <br/>
                {this.state.firstname}
                <br/>
                {this.state.lastName}
                <hr/>
                <LiftingState childname={this}/>
            </div>
        )
    }
}


class LiftingState extends Component {
    constructor(props) {
        super(props)
    }
    
    handleChandeUsername = (event) =>{
        this.props.childname.content=event.target.value;
    }
    
    render() {
        return (
            <div>
                <input 
                    type="text" 
                    value={this.username}
                    onChange={this.handleChandeUsername}
                />
            </div>
        )
    }
}

export default Parent