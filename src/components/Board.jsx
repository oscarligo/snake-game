import './Game.css'

export default function Board  ({ snake, food, gridSize })  {
    const cells = Array.from({ length: gridSize * gridSize })
    return (
        <div className="game-board-container">
        <div className="game-board">
            {cells.map((_, index) => {

            const x = index % gridSize // Calculate x coordinate
            const y = Math.floor(index / gridSize) // Calculate y coordinate

            // Check if current cell is part of the snake or has food
            const isSnake = snake.some(segment => segment.x === x && segment.y === y)
            const isFood = food.x === x && food.y === y

            // Styles based on cell type
            let cellClass = "game-cell"
            if (isSnake) cellClass += " snake-cell"
            if (isFood) cellClass += " food-cell"

            return (
                <div
                key={index}
                className={cellClass}
                />
            )
            })}
        </div>
        </div>
    )
    };

