import './Game.css'
import {LEFT, RIGHT, UP, DOWN} from '../utils/constants'

export default function GameControls ({ isGameOver, onReset, onDirectionChange }) {
    return (
        <div className="game-controls">

                <button className="reset-button reset-button--secondary" onClick={onReset}>
                        Reiniciar
                </button>

                {!isGameOver && (

                <div className="direction-pad">
                <div className="pad-spacer" />
                    <button className="direction-button" onClick={() => onDirectionChange(UP)}>▲</button>
                    <div className="pad-spacer" />

                    <button className="direction-button" onClick={() => onDirectionChange(LEFT)}>◀</button>
                    <div className="pad-spacer" />
                    <button className="direction-button" onClick={() => onDirectionChange(RIGHT)}>▶</button>

                    <div className="pad-spacer" />
                    <button className="direction-button" onClick={() => onDirectionChange(DOWN)}>▼</button>
                    <div className="pad-spacer" />
                </div>
                )}

                {isGameOver && (
                    <p className="game-over-message game-over-message--help">
                        Pulsa reiniciar para jugar otra vez
                    </p>
                )}
        </div>
    )
}

