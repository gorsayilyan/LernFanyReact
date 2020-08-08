import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username: "",
             coments: "",
             topic: "react"
        }
    }
    handleusernameChange = (event) =>{
        this.setState({
            username: event.target.value
        })
    }

    handleComentsChange = (event) =>{
        this.setState({
            coments: event.target.value
        })
    }

    handleTopicChange = (event) =>{
        this.setState({
            topic: event.target.value
        })
    }

    handleSubmit = (event) =>{
        // alert(`${this.state.username} ${this.state.coments} ${this.state.topic}`)
        console.log(this.state)
        event.preventDefault();
    }
    
    render() {
        const{username, coments, topic} = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Username</label>
                    <input 
                    value={username} 
                    onChange={this.handleusernameChange}
                    />
                </div>
                <div>
                    <label>Coments</label>
                    <textarea value = {coments} onChange={this.handleComentsChange}></textarea>
                </div>
                <div>
                    <label>Topic</label>
                    <select value={topic} onChange={this.handleTopicChange}>
                        <option value = "react">React</option>
                        <option value = "angular">Angular</option>
                        <option value = "vue">Vue</option>
                    </select>
                </div>
                <button type="submit" >Submit</button>
            </form>
        )
    }
}

export default Form

