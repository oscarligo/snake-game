
// Constants for the Snake Game


export const GRID_SIZE = 20 // 20x20 grid

// snake starting position (3 segments)
export const INITIAL_SNAKE = [
  { x: 10, y: 10 }, // Head
  { x: 10, y: 11 }, // Body
  { x: 10, y: 12 }  // Tail
]

export const INITIAL_DIRECTION = { x: 0, y: -1 } // Moving up

export const INITIAL_FOOD = { x: 5, y: 5 } // Initial food position

// Direction vectors
export const LEFT = { x: -1, y: 0 } 
export const RIGHT = { x: 1, y: 0 }
export const UP = { x: 0, y: -1 }
export const DOWN = { x: 0, y: 1 }