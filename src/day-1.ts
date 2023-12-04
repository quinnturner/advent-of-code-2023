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
