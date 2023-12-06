const map = new Map<string, number>([
  ["1", 1],
  ["2", 2],
  ["3", 3],
  ["4", 4],
  ["5", 5],
  ["6", 6],
  ["7", 7],
  ["8", 8],
  ["9", 9],
]);

export default function day1(document: string) {
  const lines = document.split("\n");
  let sum = 0;
  for (const line of lines) {
    let firstIntIndex = -1;
    for (let i = 0; i < line.length; i++) {
      const num = map.get(line.charAt(i));
      if (num !== undefined) {
        sum += num * 10;
        firstIntIndex = i;
        break;
      }
    }
    for (let i = line.length - 1; i >= firstIntIndex; i--) {
      const num = map.get(line.charAt(i));
      if (num !== undefined) {
        sum += num;
        break;
      }
    }
  }
  return sum;
}

export function day1Speedy(document: string) {
  const { length } = document;

  let sum = 0;

  let haveSeenANumberOnThisLine = false;
  let currentNumber = -1;

  for (let i = 0; i < length; i++) {
    const char = document.charAt(i);
    if (map.has(char)) {
      currentNumber = map.get(char)!;
      if (!haveSeenANumberOnThisLine) {
        sum += 10 * currentNumber;
        haveSeenANumberOnThisLine = true;
      }
    } else if (char === '\n') {
      if (haveSeenANumberOnThisLine) {
        sum += currentNumber;
      }
      haveSeenANumberOnThisLine = false;
      currentNumber = -1;
    }
  }
  // Edge case for the last line, since it doesn't end on a `\n`.
  if (currentNumber !== -1) {
    sum += currentNumber;
  }
  return sum;
}
