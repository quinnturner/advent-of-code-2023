
function toGames(puzzleText: string) {
  return puzzleText.split("\n").map((d) => {
    const colon = d.indexOf(":");
    return {
      puzzle: d.substring(colon + 2),
    };
  });
}

export function day2Part2(puzzleText: string) {
  const games = toGames(puzzleText);

  let sumOfPower = 0;

  for (const { puzzle } of games) {
    let maxRed = 0;
    let maxGreen = 0;
    let maxBlue = 0;
    let currentPuzzle = puzzle;

    while (currentPuzzle.length > 0) {
      let spaceIndex = currentPuzzle.indexOf(" ");
      const currNum = parseInt(currentPuzzle.slice(0, spaceIndex));
      currentPuzzle = currentPuzzle.slice(spaceIndex + 1);
      switch (currentPuzzle.charAt(0)) {
        case "r":
          maxRed = Math.max(maxRed, currNum);
          currentPuzzle = currentPuzzle.slice("red".length + 2);
          break;
        case "g":
          maxGreen = Math.max(maxGreen, currNum);
          currentPuzzle = currentPuzzle.slice("green".length + 2);
          break;
        case "b":
          maxBlue = Math.max(maxBlue, currNum);
          currentPuzzle = currentPuzzle.slice("blue".length + 2);
          break;
        default:
          throw new Error("unexpected" + currentPuzzle);
      }
    }
    sumOfPower += maxBlue * maxGreen * maxRed;
  }
  return sumOfPower;
}
