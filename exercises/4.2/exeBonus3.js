let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newArray = [];
numbers.push(2);

for (let i = 1; i < numbers.length; i += 1) {
  newArray.push()
  newArray.push(numbers[i] * numbers[i - 1]);
}
console.log(newArray);