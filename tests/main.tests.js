// import { randProductName, randNumber } from '@ngneat/falso';
function addProduct(name, price) {
  const productNameRegexNoSpace = /^\S*$/g; // no white-space allowed
  if (!productNameRegexNoSpace.test(name)) {
    return false;
  }
  return typeof price === 'number';
}
test('When adding new valid product, get successful confirmation', () => {
  const name = 'Handmade';
  const price = 704809;
  // Generated random input: { 'Handmade Granite Cheese', 704809 }
  expect(addProduct(name, price)).toBe(true);
  // Test failed, the random input triggered some path we never planned for.
  // We discovered a bug early!
});
