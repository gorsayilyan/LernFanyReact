import React  from "react"
import Person from "./Person"
function Namelist(){
    const names=["Gor","Igor","Garik","Gor"];
        const persons=[  
        {
            id:1,
            name:"Gor",
            age:30,
            skilly:"junior-3",
        },
        {
            id:2,
            name:"Poxos",
            age:25,
            skilly:"Angular",            
        },
        {
            id:3,
            name:"Diana",
            age:20,
            skilly:"vue",  
        }]
    // const personList = persons.map(person => <Person key = {person.id} person = {person} />);
    const nameList = names.map((name,index) => <h2 key={index}>{index} {name}</h2>)
     return (<div>{nameList}</div>)

}
export default Namelist