import React, {Component} from "react"
import "./restoran.css"
let arr=[
{id:"1",img: "./Utester/xmicq1.jpg" ,text:"Կոկա-կոլա ",arjeq: 500,name:"kola",qanak:0},
{id:"2",img: "./Utester/xmicq2.jpg",text:"Ֆանտա ",arjeq: 400,name:"fanta",qanak:0},
{id:"3",img: "./Utester/xmicq3.jpg",text:"Սպրայտ ",arjeq: 450,name:"sprayt",qanak:0}, 
{id:"4",img: "./Utester/xmicq4.jpg",text:"Պեպսի ",arjeq: 380,name:"pepsi",qanak:0},
{id:"5",img: "./Utester/xmicq5.jpg",text:"Ապ-7 ",arjeq: 350,name: "up7",qanak:0}
]

class Xmichqner extends Component {
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
        
export default Xmichqner
