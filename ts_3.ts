// Напишите рукурсивную функцию для подсчета элементов в списке

const arr = [1, 3, 6, 5, 8, 5, 7]

function countElements(array: number[]) : number{
  if (array.length === 0) return 0;
  return 1 + countElements(array.splice(1));
}

console.log(countElements(arr))

// Напишите рукурсивную функцию для нахождения наибольшего числа списке

const arr = [1, 3, 6, 57, 8, 5, 7]


function findMax(array:  number[]) : number {
  if (array.length === 1) {
    return array[0]
  }
  
  const result = findMax(array.splice(1))
  if (array[0] > result) {
    return array[0]
  } else {
    return result
  }
}

console.log(findMax(arr))

