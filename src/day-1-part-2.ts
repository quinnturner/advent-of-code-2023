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

const words = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

const wordMap = new Map<string, number>([
  ["one", 1],
  ["two", 2],
  ["three", 3],
  ["four", 4],
  ["five", 5],
  ["six", 6],
  ["seven", 7],
  ["eight", 8],
  ["nine", 9],
]);

export default function day2(document: string) {
  const lines = document.split("\n");
  let sum = 0;
  for (const line of lines) {
    let currSum = sum;
    let firstIntIndex = -1;
    for (let i = 0; i < line.length; i++) {
      const char = line.charAt(i);
      const num = map.get(char);
      if (num !== undefined) {
        sum += num * 10;
        firstIntIndex = i;
        break;
      }
      let foundOuter = false;
      for (const word of words) {
        if (word.charAt(0) === char) {
          let found = true;
          for (let j = 1; j < word.length; j++) {
            if (word.charAt(j) !== line.charAt(i + j)) {
              found = false;
              break;
            }
          }
          if (found) {
            sum += wordMap.get(word)! * 10;
            firstIntIndex = i + word.length;
            foundOuter = true;
            break;
          }
        }
      }
      if (foundOuter) {
        break;
      }
    }
    for (let i = line.length - 1; i >= firstIntIndex; i--) {
      const num = map.get(line.charAt(i));
      if (num !== undefined) {
        sum += num;
        break;
      }
      let foundOuter = false;
      for (const word of words) {
        if (word.charAt(word.length - 1) === line.charAt(i)) {
          let found = true;
          for (let j = word.length - 2; j >= 0; j--) {
            const lineChar = line.charAt(i - (word.length - 1) + j);
            if (word.charAt(j) !== lineChar) {
              found = false;
              break;
            }
          }
          if (found) {
            sum += wordMap.get(word)!;
            foundOuter = true;
            break;
          }
        }
      }
      if (foundOuter) {
        break;
      }
    }
  }
  return sum;
}
