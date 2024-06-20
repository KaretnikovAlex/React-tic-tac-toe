import { useState } from "react"

export function Player({ name, symbol, isActive }) {
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(name);

    function handleEditClick() {
        setIsEditing(prev => !prev);
    }

    function handleChange(event) {
        setPlayerName(event.target.value)
    }

    let playerNameContent;

    if (!isEditing) {
        playerNameContent = <span className="player-name">{playerName}</span>;
    } else {
        playerNameContent = <input onChange={handleChange} type="text" required value={playerName} />
    }

    return (
        <li className={isActive ? 'active' : ''}>
            <span className="player">
                {playerNameContent}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    )
} 