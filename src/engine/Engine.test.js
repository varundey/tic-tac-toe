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

describe("isWinnerFoundVertically", () => {
  it("should return false if vertical row has two 0s", () => {
    const engine = new Engine(3);
    const matrix = [
      [1, 0, 0],
      [1, 1, 0],
      [0, 0, 1],
    ];
    expect(engine.isWinnerFoundVertically(matrix)).toBeFalsy();
  });

  it("should return false if vertical row has one 0", () => {
    const engine = new Engine(3);
    const matrix = [
      [1, 1, 0],
      [1, 0, 1],
      [0, 1, 1],
    ];
    expect(engine.isWinnerFoundVertically(matrix)).toBeFalsy();
  });

  it("should return false if horizontal row has all 1s", () => {
    const engine = new Engine(3);
    const matrix = [
      [1, 0, 1],
      [0, 1, 0],
      [1, 1, 1],
    ];
    expect(engine.isWinnerFoundVertically(matrix)).toBeFalsy();
  });

  it("should return true if vertical row has all 1s", () => {
    const engine = new Engine(3);
    const matrix = [
      [0, 1, 1],
      [1, 0, 1],
      [0, 1, 1],
    ];
    expect(engine.isWinnerFoundVertically(matrix)).toBeTruthy();
  });
});

describe("isMatrixRowTrueHorizontally", () => {
  it("should return false if any horizontal row has two 0s", () => {
    const engine = new Engine(3);
    const matrix = [
      [1, 0, 0],
      [0, 1, 0],
      [0, 0, 1],
    ];
    expect(engine.isMatrixRowTrueHorizontally(matrix)).toBeFalsy();
  });

  it("should return false if any horizontal row has one 0", () => {
    const engine = new Engine(3);
    const matrix = [
      [1, 1, 0],
      [1, 0, 1],
      [0, 1, 1],
    ];
    expect(engine.isMatrixRowTrueHorizontally(matrix)).toBeFalsy();
  });

  it("should return false if only vertical row has all 1s", () => {
    const engine = new Engine(3);
    const matrix = [
      [1, 1, 0],
      [1, 0, 1],
      [1, 1, 0],
    ];
    expect(engine.isMatrixRowTrueHorizontally(matrix)).toBeFalsy();
  });

  it("should return true if any horizontal row has all 1s", () => {
    const engine = new Engine(3);
    const matrix = [
      [1, 0, 1],
      [0, 1, 1],
      [1, 1, 1],
    ];
    expect(engine.isMatrixRowTrueHorizontally(matrix)).toBeTruthy();
  });
});
