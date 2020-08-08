import React, {Component} from "react"
import "./restoran.css"
let arr=[
{id:"1",img: "./Utester/viski1.jpg" ,text:"Jack Daniels ",arjeq: 20000,name:"kola",qanak:0},
{id:"2",img: "./Utester/viski2.jpg",text:"Teling ",arjeq: 18000,name:"fanta",qanak:0},
{id:"3",img: "./Utester/viski3.jpg",text:"Bacardi ",arjeq: 17000,name:"sprayt",qanak:0}, 
{id:"4",img: "./Utester/viski4.jpg",text:"Jim Beam ",arjeq: 19000,name:"pepsi",qanak:0},
{id:"5",img: "./Utester/viski5.jpg",text:"White House ",arjeq: 25000,name: "up7",qanak:0}
]

class Viskiner extends Component {
    constructor(props) {
        super(props)
        this.state = {
            gumar:0,
        }
    }
    onChangeHandler = event => {
        let getInp=document.querySelectorAll("input");
        for(let i = 0 ; i<getInp.length; i++){
            if(event.target==getInp[i]){
                arr[i].qanak=+(getInp[i].value)
            }
        }
}

onClickHandler = () => {
let yndameny=0;
arr.map(({arjeq,qanak})=>{
    let arjeqV = arjeq*qanak;
    yndameny+=arjeqV
})
    this.setState((state)=>({
        gumar:yndameny
    }))
}
    render() {
        return (
            <div>                
                {arr.map(({id,img,text,arjeq,name})=>(
                    <div key={id} className="div1" >
                    <img src={img} className="nkar"></img>
                    <h2>{text}</h2>
                    <hr/>
                    <p>Գինը{arjeq}դր</p>
                    <input placeholder="Քանակ" onChange={this.onChangeHandler} ></input>
                    </div>
                ))}
                <button onClick={ this.onClickHandler}>Հաստատել</button>
                 <h1>Ըդամենը ՝{this.state.gumar} դրամ</h1>
            </div>
        )
    }
}
        
export default Viskiner