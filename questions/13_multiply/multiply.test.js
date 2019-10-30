const { multiply } = require('./multiply');

describe('multiply testing', () => {
  test('it should ensure it receives two numbers', () => {
    // test some values that should fail

    expect(() => multiply(2, 3, 4)).toThrow("only two numbers!");

    expect(() => multiply(a)).toThrow("only numbers!");
  });

  test('it returns the product of two numbers', () => {
    // test the type of the returned value
    expect(2,3).toBe(6);

    // test that the returned value is correct
    expect(3,4).toBe(12);

    // test some other values
    expect(5,10).toBe(50);
  });

  test('it is not hardcoded (hint: use random numbers)', () => {
    // test some random values
    
  });
});
