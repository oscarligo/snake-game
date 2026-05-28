import React from 'react'

export default function ScoreBoard ({ score, isGameOver }) {
    return (
        <div className="scoreboard">
        <div className="score-current">
            Puntuación: <span className="score-number">{score}</span>
        </div>
        {isGameOver && (
            <div className="game-over-message">
            ¡GAME OVER!
            </div>
        )}
        </div>
    )
}

