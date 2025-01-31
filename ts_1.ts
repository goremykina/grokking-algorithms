function binarySearch<T>(arr: T[], item: T) : number | null {
  let low: number = 0;
  let high: number = arr.length - 1;

  while (low <= high) {
    let mid: number = Math.floor((low + high) / 2);
    let guess: T = arr[mid];

    if (guess === item) {
      return mid 
    } 
    if (guess > item) {
      high = mid - 1
    } else {
      low = mid + 1
    }
  }

  return null
} 

const list = [1, 3, 5, 7, 9]

console.log(binarySearch(list, 3))
console.log(binarySearch(list, -1))
