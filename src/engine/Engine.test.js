import Engine from "./Engine";

describe("Engine", () => {
  it("should have proper constructors", () => {
    const engine = new Engine(3);
    expect(engine.boardSize).toEqual(3);
    expect(engine.winner).toBeNull();
    expect(engine.playerEnum).toEqual({
      PLAYER1: {
        NAME: "PLAYER1",
        MATRIX: [
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0],
        ],
      },
      PLAYER2: {
        NAME: "PLAYER2",
        MATRIX: [
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0],
        ],
      },
    });
  });

  it("should return createMatrix with empty array", () => {
    const engine = new Engine(3);
    expect(engine.createMatrix()).toEqual([
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ]);
  });

  it("should updateMatrix for the given player", () => {
    const engine = new Engine(3);
    expect(engine.playerEnum.PLAYER1.MATRIX).toEqual([
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ]);
    const player1 = engine.playerEnum["PLAYER1"].NAME;
    engine.updateMatrix(player1, { x: 0, y: 1 });
    expect(engine.playerEnum.PLAYER1.MATRIX).toEqual([
      [0, 1, 0],
      [0, 0, 0],
      [0, 0, 0],
    ]);
  });
});
