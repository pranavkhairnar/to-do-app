import React, { useState } from "react";


function Todo(props) {
    
    function handleClick() {
        
    }
    return <div >
        <li>
        <table>
            <tr>
                <th>{props.text}</th>
                <th>&nbsp;&nbsp;&nbsp;&nbsp;</th>
                <th><button onClick={() => {
            props.onChecked(props.id);
        }}>Delete</button></th>
        <th><button onClick={() => {
            props.editChecked(props.id);
        }}>Edit</button></th>
        
            </tr>
        </table>
        </li>
        
        
        
    </div>;
}

export default Todo;