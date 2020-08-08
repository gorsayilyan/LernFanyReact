import React from 'react';
import Xmichqner from "./Xmichqner"
import Viskiner from "./Viskiner"
import Mrger from "./Mrger"
import Banjarexen from "./Banjarexen"
import Restoran from "./Restoran"
import HotelSlider from "./HotelSlider"
import "./restoran.css"

import { BrowserRouter, Route, Link } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";

const history = createBrowserHistory();

    

class Meniu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
             databaz:[
[{id:"1",img: "./Utester/xndzor.jpg" ,text:"Խնձոր ",arjeq: 500,name:"kola",qanak:0},
{id:"2",img: "./Utester/banan.jpg",text:"Բանան ",arjeq: 700,name:"fanta",qanak:0},
{id:"3",img: "./Utester/opersin.jpg",text:"Նարինջ ",arjeq: 800,name:"sprayt",qanak:0}, 
{id:"4",img: "./Utester/elak.jpg",text:"Ելակ ",arjeq: 600,name:"pepsi",qanak:0},
{id:"5",img: "./Utester/mandarin.jpg",text:"Մանդարին ",arjeq: 500,name: "up7",qanak:0}
],
[{id:"1",img: "./Utester/xmicq1.jpg" ,text:"Կոկա-կոլա ",arjeq: 500,name:"kola",qanak:0},
{id:"2",img: "./Utester/xmicq2.jpg",text:"Ֆանտա ",arjeq: 400,name:"fanta",qanak:0},
{id:"3",img: "./Utester/xmicq3.jpg",text:"Սպրայտ ",arjeq: 450,name:"sprayt",qanak:0}, 
{id:"4",img: "./Utester/xmicq4.jpg",text:"Պեպսի ",arjeq: 380,name:"pepsi",qanak:0},
{id:"5",img: "./Utester/xmicq5.jpg",text:"Ապ-7 ",arjeq: 350,name: "up7",qanak:0}
],
[{id:"1",img: "./Utester/viski1.jpg" ,text:"Jack Daniels ",arjeq: 20000,name:"kola",qanak:0},
{id:"2",img: "./Utester/viski2.jpg",text:"Teling ",arjeq: 18000,name:"fanta",qanak:0},
{id:"3",img: "./Utester/viski3.jpg",text:"Bacardi ",arjeq: 17000,name:"sprayt",qanak:0}, 
{id:"4",img: "./Utester/viski4.jpg",text:"Jim Beam ",arjeq: 19000,name:"pepsi",qanak:0},
{id:"5",img: "./Utester/viski5.jpg",text:"White House ",arjeq: 25000,name: "up7",qanak:0}
],
[{id:"1",img: "./Utester/xoziXorovac.jpg" ,text:"Խորոված",arjeq: 1200,name:"Xorovac",qanak:0},
{id:"2",img: "./Utester/qyabab.jpg",text:"Քյաբաբ",arjeq: 700,name:"Qyabab",qanak:0},
{id:"3",img: "./Utester/Shahurma.jpg",text:"Շաուրմա ",arjeq: 1000,name:"Shahurma",qanak:0}, 
{id:"4",img: "./Utester/Pica.jpg",text:"Պիցցա ",arjeq: 800,name:"Pica",qanak:0},
{id:"5",img: "./Utester/Xash.jpg",text:"Խաշ ",arjeq: 2000,name: "Xash",qanak:0}
],
[{id:"1",img: "./Utester/kanachi1.jpg" ,text:"Մաղադանոս ",arjeq: 500,name:"kola",qanak:0},
{id:"2",img: "./Utester/kanachi2.jpg",text:"Ծիտրոն ",arjeq: 700,name:"fanta",qanak:0},
{id:"3",img: "./Utester/kanachi3.jpg",text:"Ուրց ",arjeq: 800,name:"sprayt",qanak:0}, 
{id:"4",img: "./Utester/kanachi4.jpg",text:"Ռեհան ",arjeq: 600,name:"pepsi",qanak:0},
{id:"5",img: "./Utester/kanachi5.jpg",text:"Անանուխ ",arjeq: 500,name: "up7",qanak:0}
]
]
        }
    }
    

    onChangeHandler = event => {
        let getInp=document.querySelectorAll("input");
        console.log(event.target);
        
        for(let i = 0 ; i<getInp.length; i++){
            if(event.target==getInp[i]){
                this.state.databaz[i].qanak=+(getInp[i].value)
            }
        }
        // console.log(arr);
}

onClickHandler = () => {
let yndameny=0;
for(let j=0; j<this.state.databaz.length ; j++){
    this.state.databaz.map(({arjeq,qanak})=>{
    let arjeqV = arjeq*qanak;
    yndameny+=arjeqV
})
}
console.log(yndameny);
    this.setState((state)=>({
        gumar:yndameny
    }))
}


render() {
return (
<BrowserRouter history={history}>
<div>
    <h1 ><Link to="/" className="vernagir">Խորեայի Ձոր Հյուրանոցային Համալիր</Link></h1>
<ul>
<li><Link to="/ՈՒտեստներ">ՈՒտեստներ</Link></li>
<li><Link to="/Զովացուցիչ ըմպելիքներ">Զովացուցիչ ըմպելիքներ</Link></li>
<li><Link to="/Վիսկիներ">Վիսկիներ</Link></li>
<li><Link to="/Մրգեր">Մրգեր</Link></li>
<li><Link to="/Բանջարեղեններ">Բանջարեղեններ</Link></li>

</ul>
<hr/>
<Route exact path="/" component={HotelSlider}/>
<Route path="/ՈՒտեստներ" component={Restoran}/>
<Route path="/Զովացուցիչ ըմպելիքներ" component={Xmichqner}/>
<Route path="/Վիսկիներ" component={Viskiner}/>
<Route path="/Մրգեր" component={Mrger}/>
<Route path="/Բանջարեղեններ" component={Banjarexen}/>
</div>

</BrowserRouter>
)}}

export default Meniu;