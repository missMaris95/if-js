function sum(n1) {
  return (n2) => n1 + n2;
}

console.log(sum(5)(2));
module.exports = sum();
