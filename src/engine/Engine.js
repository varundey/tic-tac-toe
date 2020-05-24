export default class Engine {
  constructor(size) {
    this.boardSize = size;
    this.winner = null;
    this.playerEnum = {
      P1: {
        NAME: "player1",
        MATRIX: this.createMatrix(),
      },
      P2: {
        NAME: "player2",
        MATRIX: this.createMatrix(),
      },
    };
  }

  createMatrix = () => {
    const createArrays = Array(this.boardSize).fill(null);
    const matrix = createArrays.map(() => createArrays);
    return matrix;
  };
}
