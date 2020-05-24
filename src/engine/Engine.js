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
    return [];
  };
}
