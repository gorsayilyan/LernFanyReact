import React from "react"

const CounterHoc = (Xooo,incrementNumber) =>{
    class CounterHoc extends React.Component {
        constructor(props) {
            super(props)
        
            this.state = { 
                 count:0 
            }
        }
    
        increment = () =>{
            this.setState(prevstate =>{
                return{count:prevstate.count+incrementNumber}
            })
        }
        render(){
            console.log(this.props.name)
            return <Xooo 
                        count={this.state.count} 
                        increment={this.increment}
                       {...this.props}
                    />
        }
    }
    return CounterHoc
}

export default CounterHoc