import React, {Component} from "react"
import "./restoran.css"
let arr=[
{id:"1",img: "./Utester/xoziXorovac.jpg" ,text:"Խորոված",arjeq: 1200,name:"Xorovac",qanak:0},
{id:"2",img: "./Utester/qyabab.jpg",text:"Քյաբաբ",arjeq: 700,name:"Qyabab",qanak:0},
{id:"3",img: "./Utester/Shahurma.jpg",text:"Շաուրմա ",arjeq: 1000,name:"Shahurma",qanak:0}, 
{id:"4",img: "./Utester/Pica.jpg",text:"Պիցցա ",arjeq: 800,name:"Pica",qanak:0},
{id:"5",img: "./Utester/Xash.jpg",text:"Խաշ ",arjeq: 2000,name: "Xash",qanak:0}
]

class Restoran extends Component { 
    constructor(props) {
        super(props)
        this.state = {
            gumar:0,
        }
    }
    onChangeHandler = event => {
        let getInp=document.querySelectorAll("input");
        console.log(event.target);
        
        for(let i = 0 ; i<getInp.length; i++){
            if(event.target==getInp[i]){
                arr[i].qanak=+(getInp[i].value)
            }
        }
        console.log(arr);
}

onClickHandler = () => {
let yndameny=0;
arr.map(({arjeq,qanak})=>{
    let arjeqV = arjeq*qanak;
    yndameny+=arjeqV
})
console.log(yndameny);
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
        
export default Restoran
