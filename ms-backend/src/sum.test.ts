const sum = require("./sum");

describe('When the sum funcation is called', () => {
  it('function sum returns a integer value', () => {
    const result1 = sum.sum(1, 2)
    expect(result1).toBe(3);
  });
});
