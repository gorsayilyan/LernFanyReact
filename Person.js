import React from 'react'

function Person({person}) {
    return ( 
        <div>
          <h2>
             I am {person.name}. I am {person.age} year oldn I know {person.skilly}
          </h2>
        </div>
    )
}

export default Person
