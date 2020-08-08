import React, { Component } from 'react'

export class UderstudLifecicle extends Component {
    constructor(props) {
        super()
    
        this.state = {
             age: props.initialAge,
             status: 0,
             homeLink: props.initialLinkName,
        }
        setTimeout(()=>{
            this.setState({
                status: 1,
            })
        },3000);
        console.log("Constructor");
    }

    componentWillMount(){
        console.log("Component will mount");
    }
    
    componentDidMount(){
        console.log("Component did mount");
    }

    componentWillReceiveProps(nextProps){
        console.log("Component will receive props", nextProps);
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log("should component update", nextProps, nextState);
        return true;
    }

    componentWillUpdate(nextProps, nextState){
        console.log("component will update", nextProps, nextState);
    }

    componentDidUpdate(prevProps, prevState){
        console.log("compnent did update", prevProps, prevState);
    }
    
    componentWillUnmount(){
        console.log("component will unmount")
    }

    onMakeOlder() {
        this.setState({
            age: this.state.age + 3,
        });
    }

    onChangeLink() {
        this.props.changeLink(this.state.homeLink)
    }

    onHandleChange(event){
        this.setState({
            homeLink: event.target.value
        });
    }

    render() {
        return (
            <div>
                <p>In a new component</p>
                <p>Your name is {this.props.age},yor age is {this.state.age}</p>
                <p>Status: {this.state.status}</p>
                <hr/>
                <button onClick={() => this.onMakeOlder()}>Make me older</button>
                <hr/>
                <button onClick={this.props.greet}>Greet</button>
                <hr/>
                <input type="text" value={this.state.homeLink} 
                       onChange={(event) => this.onHandleChange(event)}/>
                <button onClick={this.onChangeLink.bind(this)}>Change</button>
            </div>  
        )
    }
}

export default UderstudLifecicle
