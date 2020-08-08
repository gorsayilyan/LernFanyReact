import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
             username: "",
             lastname: "",
             usermail: "",
             userAuto: "s63",
        }
    }
    
    handlChangeName = (event) => {
        this.setState({
            username:event.target.value,
        })
    }

    handlChangeLastName = (event) => {
        this.setState({
            lastname:event.target.value,
        })
    }

    handlMail = (event) => {
        this.setState({
            usermail:event.target.value,
        })
    }

    handleAutoChange = (event) => {
        this.setState({
            userAuto:event.target.value,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        alert(`${this.state.username} ${this.state.lastname} ${this.state.usermail} ${this.state.userAuto}`)
    }
    
    render() {
        const { username, lastname, usermail, userAuto } = this.state;
        return (
            <form onSubmit={this.handleSubmit} >
                <label>
                    User name
                    <input 
                    type="text" 
                    value={username} 
                    onChange={this.handlChangeName}
                    />
                </label>
                <br/>
                <label>
                    User last name
                    <input 
                    type="text"
                    value={lastname}
                    onChange={this.handlChangeLastName}
                    />
                </label>
                <br/>
                <label>
                    User mail
                    <input 
                    type="email"
                    value={usermail} 
                    onChange={this.handlMail}
                    />
                </label>
                <br/>
                <select 
                    value={userAuto} 
                    onChange={this.handleAutoChange}>
                    <optgroup label="BMW">
                        <option value="s63">s63</option>
                        <option value="BMW X5">BMW X5</option>
                    </optgroup>
                    <optgroup label="Mercedes">
                        <option value="c120">c120</option>
                        <option valu="e320">e320</option>
                    </optgroup>
                </select>
                <br/>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default Form;
