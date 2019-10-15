import twoDecimalsFormatter from '../twoDecimalsFormatter';

describe('twoDecimalsFormatter', () => {
  const mockFn = jest.fn();

  afterEach(() => {
    mockFn.mockReset();
  });

  test('should not call function if no arg passed', () => {
    const result = twoDecimalsFormatter(mockFn)();
    expect(mockFn).not.toHaveBeenCalled();
    expect(result).toBeUndefined();
  });
});
