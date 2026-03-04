
// 1 
a = [1, 2, 3, 4, 5]
b = [10,11,12,13,14]

ab = b.map((b, i) => b + a[i]); 
console.log(ab)


// 2

let d = [1, 2, 8, "+", 3, 4, "-", 7, "+", 5];
let s = d.splice(1, 7); 
let pyst = []; 

for (let i = 0; i < s.length; i++) {
  if (typeof s[i] === 'number') {
    res.push(s[i]);
  } 
}

console.log(pyst);
