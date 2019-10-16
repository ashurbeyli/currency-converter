import twoDecimalsFormatter from '../twoDecimalsFormatter';

describe('twoDecimalsFormatter', () => {
  test('should return empty string if no arg passed', () => {
    expect(twoDecimalsFormatter()).toBe('')
  });
  test('should return empty string if arg is not string', () => {
    expect(twoDecimalsFormatter({})).toBe('')
  });
  test('should return last input if last arg is not string', () => {
    expect(twoDecimalsFormatter('31a')).toBe('31')
  });
  test('should return 2 digits after dot', () => {
    expect(twoDecimalsFormatter('31.1111')).toBe('31.11')
  });
});
