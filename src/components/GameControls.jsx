import './Game.css'


export default function GameControls ({ isGameOver, onReset }) {
    return (
        <div className="game-controls">
        {isGameOver ? (
            <button className="reset-button" onClick={onReset}>
            Jugar de Nuevo
            </button>
        ) : (
            <p className="game-instructions">
            Usa las flechas del teclado para moverte
            </p>
        )}
        </div>
    )
}

