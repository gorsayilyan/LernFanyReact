import React, { Component } from 'react'

class Counter extends Component {

    constructor (props){
        super(props)
        this.state={
            count:0
        }
    }

   

    // // 1.uxxakioren mi poxeq staten, ayd poxvac arjeqy chi veragrvi tvyal componenti statein
    // // 2. kody petq e katarvi ayd poxavac staten vorpes erkrord pastark texadreluc heto
    // // 3.ete petq e tarmacnel staten himnelov naxord statei vra functiony poxancum enq vorpes 
    // // argument sovorakan objecti poxaren 
    
    incrementCount = () =>{
        this.setState(prevState =>{
            return {count:prevState.count + 1}
        })
    }

    render() {
        return (
            <div>
               {this.props.children(this.state.count, this.incrementCount)}
            </div>
        )
    }
}

export default Counter

