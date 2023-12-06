function sum(n1) {
  return (n2) => n1 + n2;
}

test('sum should return sum of two values', () => {
  expect(sum(5)(2)).toBe(7); //почему не работает вариант с  expect(sum(5 ,2)).toBe(7);
});
module.exports = { sum };
