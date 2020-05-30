export default class Engine {
  constructor(size) {
    this.boardSize = size;
    this.winner = null;
    this.playerEnum = {
      PLAYER1: {
        NAME: "PLAYER1",
        MATRIX: this.createMatrix(),
      },
      PLAYER2: {
        NAME: "PLAYER2",
        MATRIX: this.createMatrix(),
      },
    };
  }

  createMatrix = () => {
    const matrix = Array(this.boardSize)
      .fill(null)
      .map(() => Array(this.boardSize).fill(0));
    return matrix;
  };

  updateMatrix = (player, position) => {
    const { x, y } = position;
    this.playerEnum[player].MATRIX[x][y] = 1;
  };

  isWinnerFoundVertically = (matrix) => {
    let occurencesOfOne = 0;
    for (let row = 0; row < this.boardSize; row += 1) {
      for (let column = 0; column < this.boardSize; column += 1) {
        if (matrix[column][row] === 0) break;
        occurencesOfOne += 1;
      }
      if (occurencesOfOne === this.boardSize) return true;
      occurencesOfOne = 0;
    }
    return false;
  };

  isWinnerFoundHorizontally = (matrix) =>
    matrix.some((row) => row.every((value) => value));

  isWinnerFoundDiagonally = (matrix) => {
    let occurencesOfOne = 0;
    for (const index in matrix) {
      if (matrix[index][index] === 1) {
        occurencesOfOne += 1;
      }
    }
    return occurencesOfOne === this.boardSize;
  };
}
