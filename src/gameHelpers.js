export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

export const createStage = () => 
  Array.from(Array(STAGE_HEIGHT), () =>
    new Array(STAGE_WIDTH).fill([0, 'clear'])
  )

export const checkCollision = (player, stage, { x: moveX, y: moveY}) => {
  for (let y = 0; y < player.tetromino.length; y += 1) {
    for (let x = 0; x < player.tetromino[y].length; x += 1) {
      // Проверка что я все еще в тетрис ячейке, а не пустышке
      if (player.tetromino[y][x] !== 0) {
        if (
          // Проверка что я не вышел за координату (y)
          !stage[y + player.pos.y + moveY] ||
          // Проверка что я не вышел за координату (х)
          !stage[y + player.pos.y + moveY][x + player.pos.x + moveX] ||
          // Проверка что в ячейку в которую перехожу не стоит 'clear'
          stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !== 'clear'
        ) {
          return true
        }
      }
    }
  }
}