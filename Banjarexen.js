import React, {Component} from "react"
import "./restoran.css"

let arr=[
{id:"1",img: "./Utester/kanachi1.jpg" ,text:"Մաղադանոս ",arjeq: 500,name:"kola",qanak:0},
{id:"2",img: "./Utester/kanachi2.jpg",text:"Ծիտրոն ",arjeq: 700,name:"fanta",qanak:0},
{id:"3",img: "./Utester/kanachi3.jpg",text:"Ուրց ",arjeq: 800,name:"sprayt",qanak:0}, 
{id:"4",img: "./Utester/kanachi4.jpg",text:"Ռեհան ",arjeq: 600,name:"pepsi",qanak:0},
{id:"5",img: "./Utester/kanachi5.jpg",text:"Անանուխ ",arjeq: 500,name: "up7",qanak:0}
]


 class Banjarexen extends Component {
     constructor(props) {
         super(props)
         this.state = {
              gumar: 0
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

export default Banjarexen

