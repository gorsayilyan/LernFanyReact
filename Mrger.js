import React, {Component} from "react"
import "./restoran.css"

let arr=[
{id:"1",img: "./Utester/xndzor.jpg" ,text:"Խնձոր ",arjeq: 500,name:"kola",qanak:0},
{id:"2",img: "./Utester/banan.jpg",text:"Բանան ",arjeq: 700,name:"fanta",qanak:0},
{id:"3",img: "./Utester/opersin.jpg",text:"Նարինջ ",arjeq: 800,name:"sprayt",qanak:0}, 
{id:"4",img: "./Utester/elak.jpg",text:"Ելակ ",arjeq: 600,name:"pepsi",qanak:0},
{id:"5",img: "./Utester/mandarin.jpg",text:"Մանդարին ",arjeq: 500,name: "up7",qanak:0}
]

 class Mrger extends Component {
     constructor(props) {
         super(props)
         this.state = {
              gumar: 0
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
                {arr.map(({id,img,arjeq,text,name})=>(
                    <div key={id} className="div1">
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

export default Mrger


