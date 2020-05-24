import Engine from "./Engine";

describe("Engine", () => {
  it("should have proper constructors", () => {
    const engine = new Engine(3);
    expect(engine.boardSize).toEqual(3);
    expect(engine.winner).toBeNull();
    expect(engine.playerEnum).toEqual({
      P1: { NAME: "player1", MATRIX: [] },
      P2: { NAME: "player2", MATRIX: [] },
    });
  });

  it("should return createMatrix with empty array", () => {
    const engine = new Engine(3);
    expect(engine.createMatrix()).toEqual([]);
  });
});
