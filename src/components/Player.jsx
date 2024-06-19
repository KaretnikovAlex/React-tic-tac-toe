import { useState } from "react"

export function Player({ name, symbol }) {
    const [isEditing, setIsEditing] = useState(false);
    const [playerN, setPlayerN] = useState(name);

    function handleEditClick() {
        setIsEditing(prev => !prev);
    }

    function nameChange(e){
        setPlayerN(e.target.value)
    }

    let playerName;

    if (!isEditing) {
        playerName = <span className="player-name">{playerN}</span>;
    } else {
        playerName = <input onChange={(e) => nameChange(e)} type="text" value={playerN} />
    }

    return (
        <li>
            <span className="player">
                {playerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    )
} 