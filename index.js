// const fb = [];
// // ADD CODE HERE
// for (let i=1; i<17; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//   fb.push("fizzbuzz");
// } else if (i % 5=== 0) {
//   fb.push("buzz");
// } else if (i % 3 === 0) {
//   fb.push("fizz"); 
// } else {
//   fb.push(i);
// }
// }
// // should log: [1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 11, 'fizz', 13, 14, 'fizzbuzz', 16]
//  console.log(fb);

 const results = [];

const fizzbuzz = (n) => {
  // ADD CODE HERE...
  for (let i=1; i<=n; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
  results.push("fizzbuzz");
} else if (i % 5=== 0) {
  results.push("buzz");
} else if (i % 3 === 0) {
  results.push("fizz"); 
} else {
  results.push(i);
 }
  }
};

fizzbuzz(16);
console.log(results);

//  should log: [1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 11, 'fizz', 13, 14, 'fizzbuzz', 16] 