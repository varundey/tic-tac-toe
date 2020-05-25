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

  isMatrixRowTrueVertically = (matrix) => {
    console.log(matrix);
    matrix.some((row, rowIndex) => row.every(() => row[rowIndex] === 1));
  };

  isMatrixRowTrueHorizontally = (matrix) => {};

  isMatrixRowTrueDiagonally = (matrix) => {};
}
