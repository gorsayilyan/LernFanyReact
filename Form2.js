import React, { Component } from 'react'

class Form2 extends Component {
    constructor(props) {
        super(props)
    
        // this.state = {value:'Please write an essay about your favorite DOM element.'};
        this.state = {value:'cocount'};


        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    
    handleChange = (event) =>{
        this.setState({value: event.target.value})
    }

    handleSubmit = (event) =>{
        // alert("A name was Submited "+ this.state.value)
        alert("Yor favorit flavor is " + this.state.value)
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Pick your flavor
                    {/* Name */}
                    {/* <input type="text" value={this.state.value} onChange={this.handleChange} /> */}
                    {/* <textarea value={this.state.value} onChange={this.handleChange}></textarea> */}
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="grapefruit">grapefruit</option>
                        <option value="lime">lime</option>
                        <option value="cocount">cocount</option>
                        <option value="mango">mango</option>
                    </select>
                </label>
                    <input type="submit" value="Submit" />
            </form >
        )
    }
}

export default Form2
