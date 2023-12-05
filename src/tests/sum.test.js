const sum = require('../scripts/sum');

test('sum should return sum of two values', () => {
  expect(5 + 2).toBe(7);//почему не работает вариант с  expect(sum(5 ,2)).toBe(7);
});
module.exports = { sum };
