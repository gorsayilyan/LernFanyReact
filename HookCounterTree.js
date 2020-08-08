import React, {useState} from 'react'

function HookCounterTree() {
    const [name,setName] = useState({firstname: "", lastname: ""})
    return (
        <form>
            <input
            type="text"
            value={name.firstname}
            onChange={e => setName({...name,firstname : e.target.value})}
            />
             <input
            type="text"
            value={name.lastname}
            onChange={e => setName({...name,lastname : e.target.value})}
            />
            <h2>Your first name - {name.firstname}</h2>
            <h2>Your first name - {name.lastname}</h2>
            <h2>{JSON.stringify(name)}</h2>
        </form>
    )
}
// ... name-ն տարածման օպերատոր է,եթե դա չենք գրում ինփութը փոխելուց նախկինը կորումա
export default HookCounterTree

