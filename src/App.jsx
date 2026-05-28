import { useState, useEffect } from 'react'
import { GRID_SIZE, INITIAL_SNAKE, INITIAL_DIRECTION, INITIAL_FOOD } from './utils/constants'
import Board from './components/Board'
import ScoreBoard from './components/ScoreBoard'
import GameControls from './components/GameControls'
import './App.css'

export default function App() {
  const [snake, setSnake] = useState(INITIAL_SNAKE)
  const [food, setFood] = useState(INITIAL_FOOD)
  const [direction, setDirection] = useState(INITIAL_DIRECTION)
  const [isGameOver, setIsGameOver] = useState(false)
  const [score, setScore] = useState(0) 

  // Generate new food in a random position that is not occupied by the snake
  const generateNewFood = (currentSnake) => {
    while (true) {
      const newFood = {
        x: Math.floor(Math.random() * GRID_SIZE),
        y: Math.floor(Math.random() * GRID_SIZE),
      }
      // Check if the new food position is on the snake
      const isOnSnake = currentSnake.some(segment => segment.x === newFood.x && segment.y === newFood.y)
      if (!isOnSnake) {
        setFood(newFood)
        break
      }
    }
  }
  // Resets the game to its initial state
  const resetGame = () => {
    setSnake(INITIAL_SNAKE)
    setDirection(INITIAL_DIRECTION)
    setFood(INITIAL_FOOD)
    setScore(0)
    setIsGameOver(false)
  }
  // Keydown listener 
  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.key) {
        case 'ArrowUp':
          if (direction.y !== 1) setDirection({ x: 0, y: -1 })
          break
        case 'ArrowDown':
          if (direction.y !== -1) setDirection({ x: 0, y: 1 })
          break
        case 'ArrowLeft':
          if (direction.x !== 1) setDirection({ x: -1, y: 0 })
          break
        case 'ArrowRight':
          if (direction.x !== -1) setDirection({ x: 1, y: 0 })
          break
        default:
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [direction])
  // Main game loop
  useEffect(() => {
    if (isGameOver) return

    const gameLoop = setInterval(() => {

      // update snake position
      setSnake((prevSnake) => {
        const head = prevSnake[0]
        const newHead = {
          x: head.x + direction.x,
          y: head.y + direction.y,
        }

        // Detects collision with walls
        if (
          newHead.x < 0 ||
          newHead.x >= GRID_SIZE ||
          newHead.y < 0 ||
          newHead.y >= GRID_SIZE
        ) {
          setIsGameOver(true)
          return prevSnake
        }

        // Detects collision with itself
        const hitSelf = prevSnake.some(segment => segment.x === newHead.x && segment.y === newHead.y)
        if (hitSelf) {
          setIsGameOver(true)
          return prevSnake
        }

        const newSnake = [newHead, ...prevSnake]

        // Detects if food is eaten
        if (newHead.x === food.x && newHead.y === food.y) {
          setScore((prevScore) => prevScore + 10) 
          generateNewFood(newSnake)
        } else {
          newSnake.pop()
        }

        return newSnake
      })
    }, 70) // Game speed (70ms per move)

    return () => clearInterval(gameLoop)
  }, [direction, food, isGameOver])

  return (
    <div className="app-container">
      <header className="game-header">
        <h1>Snake Game</h1>
      </header>
      
      <main className="game-main">
        <ScoreBoard score={score} isGameOver={isGameOver} />
        
        <Board 
          snake={snake} 
          food={food} 
          gridSize={GRID_SIZE} 
        />
        
        <GameControls 
          isGameOver={isGameOver} 
          onReset={resetGame} 
        />
      </main>
    </div>
  )
}