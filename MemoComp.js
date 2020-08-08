import React from 'react'

function MemoComp({name}) {
    console.log("********************* Memo comp rendering *****************");
    return ( 
        <div>
            {name}
        </div>
    )
}

export default React.memo(MemoComp)
