import React from "react";

function Keypad (){
    function HandlePassword(event){
        console.log ('Entering password...');
        }
    return (
        <div>
            <input onChange={HandlePassword} type="password" />
        </div>
    )
}

export default Keypad;