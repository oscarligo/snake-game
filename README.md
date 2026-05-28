# Snake Game (React + Vite)

Este repositorio contiene una implementación del juego clásico "Snake" construida con React y Vite. El objetivo no es solo que el juego funcione, sino que esté correctamente estructurado usando componentes, props y manejo de estado.

**Estructura del Proyecto**

```
snake-game/
├── src/
│   ├── assets/                # Fuentes y archivos estáticos.
│   ├── components/
│   │   ├── GameBoard.jsx      # Renderiza la grilla, la serpiente y la comida
│   │   ├── GameControls.jsx   # Muestra instrucciones y el botón de reinicio
│   │   └── ScoreBoard.jsx     # Muestra la puntuación actual y el mensaje de Game Over
│   ├── utils/
│   │   └── constants.js       # Constantes globales (GRID_SIZE, estados iniciales, etc.)
│   ├── App.jsx                # Componente raíz: estados y bucle del juego
│   ├── App.css                # Estilos globales y diseño unificado
│   └── main.jsx               # Punto de entrada de React y Vite
├── Dockerfile                
└── docker-compose.yml         
```

**Componentes, Props y Estado**
- **`App`** ([src/App.jsx](src/App.jsx))
	- Props: ninguno.
	- Estado (useState):
		- `snake` (array): lista de segmentos {x,y} — estado principal de la serpiente.
		- `food` (object): posición actual de la comida {x,y}.
		- `direction` (object): vector de movimiento {x,y}.
		- `isGameOver` (boolean): si el juego terminó.
		- `score` (number): puntuación actual.
	- Efectos (useEffect):
		- Listener `keydown` para actualizar `direction` (controles de flechas).
		- Bucle principal (`setInterval`) que actualiza la posición de la serpiente, detecta colisiones y maneja crecimiento/puntuación.
	- Responsabilidad: contener toda la lógica del juego y orquestar los componentes de presentación.

- **`Board`** ([src/components/Board.jsx](src/components/Board.jsx))
	- Props:
		- `snake` (array): segmentos a renderizar.
		- `food` (object): posición de la comida.
		- `gridSize` (number): tamaño N de la grilla (N x N).
	- Estado: ninguno (componente presentacional).
	- Responsabilidad: renderizar las celdas, aplicar clases CSS según si la celda contiene parte de la serpiente o la comida.

- **`ScoreBoard`** ([src/components/ScoreBoard.jsx](src/components/ScoreBoard.jsx))
	- Props:
		- `score` (number): puntuación mostrada.
		- `isGameOver` (boolean): para mostrar mensaje de fin de juego.
	- Estado: ninguno (presentacional).

- **`GameControls`** ([src/components/GameControls.jsx](src/components/GameControls.jsx))
	- Props:
		- `isGameOver` (boolean): controla si se muestra el botón de reinicio.
		- `onReset` (function): callback para reiniciar el juego.
	- Estado: ninguno (presentacional).





