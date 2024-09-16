import { useState } from "react";

export default function Player({name, symbol}) {

    const [playerName, setPlayerName] = useState(name);
    const [isEditing, setIsEditing] = useState(false);

    function handleClick(){
        setIsEditing((editing) => !editing);
    };

    function handleSave(event){
        setPlayerName(event.target.value)
    };

    let player = <span className='player-name'>{playerName}</span>

    if(isEditing){
        player = <input type="text" required value={playerName} onChange={handleSave}/>
    };
 
    return (
        <li>
            <span className='player'>
                {player}
                <span className='player-symbol'>{symbol}</span>
            </span>
            <button type="button" onClick={handleClick}>{ isEditing ? 'Save' : 'Edit' }</button>
       </li>
    );
}