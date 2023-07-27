const { calculateFICATaxes, testFICATaxes } = require('./script');

// Test case to verify the FICA tax calculation
test('FICA tax calculation should be accurate', () => {

  // Test the total FICA taxes
  const expectedFICATaxes = 19268.98;
  testFICATaxes(); // Calls the test function to check the total FICA taxes

  // Check if the totalFICATaxes variable matches the expected amount
  expect(totalFICATaxes).toBe(expectedFICATaxes);
});
