const maxRed = 12;
const maxGreen = 13;
const maxBlue = 14;

function toGames(puzzleText: string) {
  return puzzleText.split("\n").map((d) => {
    const colon = d.indexOf(":");
    const game = parseInt(d.substring(d.indexOf(" ") + 1, colon));
    return {
      puzzle: d.substring(colon + 2),
      game,
    };
  });
}

export function day2(puzzleText: string) {
  const games = toGames(puzzleText);

  let sumOfGames = 0;

  for (const { puzzle, game } of games) {
    let currentPuzzle = puzzle;

    let valid = true;
    while (currentPuzzle.length > 0) {
      let spaceIndex = currentPuzzle.indexOf(" ");
      const currNum = parseInt(currentPuzzle.slice(0, spaceIndex));
      currentPuzzle = currentPuzzle.slice(spaceIndex + 1);
      switch (currentPuzzle.charAt(0)) {
        case "r":
          if (currNum > maxRed) {
            valid = false;
            break;
          }
          currentPuzzle = currentPuzzle.slice("red".length + 2);
          break;
        case "g":
          if (currNum > maxGreen) {
            valid = false;
            break;
          }
          currentPuzzle = currentPuzzle.slice("green".length + 2);
          break;
        case "b":
          if (currNum > maxBlue) {
            valid = false;
            break;
          }
          currentPuzzle = currentPuzzle.slice("blue".length + 2);
          break;
        default:
          throw new Error("unexpected" + currentPuzzle);
      }
      if (!valid) break;
    }
    if (valid) sumOfGames += game;
  }
  return sumOfGames;
}
