import calculateWinner from './utils';
​
const nullArr = size => Array(size).fill(null);
​
describe('utils', () => {
  describe('calculateWinner()', () => {
    test('should true', () => {
      const verdadero = { a:true };
      expect(verdadero).toEqual({a:true});
    })
​
    it('should return winner mark if exist same mark horizontally', () => {
      expect(calculateWinner(['X', 'X', 'X', ...nullArr(6)])).toBe('X');
      expect(calculateWinner([...nullArr(3), 'X', 'X', 'X', ...nullArr(3)])).toBe('X');
      expect(calculateWinner([...nullArr(6), 'X', 'X', 'X'])).toBe('X');
    });
    it('should return winner mark if exist same mark vertically', () => {
      expect(calculateWinner(['O', ...nullArr(2), 'O', ...nullArr(2), 'O', ...nullArr(2)])).toBe('O');
      expect(calculateWinner([null, 'O', ...nullArr(2), 'O', ...nullArr(2), 'O', null])).toBe('O');
      expect(calculateWinner([...nullArr(2), 'O', ...nullArr(2), 'O', ...nullArr(2), 'O'])).toBe('O');
    });
    it('should return winner mark if exist same mark at diagonals', () => {
      expect(calculateWinner(['m', ...nullArr(3), 'm', ...nullArr(3), 'm'])).toBe('m');
      expect(calculateWinner([...nullArr(2), 'k', null, 'k', null, 'k', ...nullArr(2)])).toBe('k');
    });
    it('should return null if no mark at conventional winner lines', () => {
      expect(calculateWinner(nullArr(9))).toBe(null);
    })
    it('should return null if no valid input', () => {
      expect(calculateWinner(null)).toBe(null);
      expect(calculateWinner(undefined)).toBe(null);
      expect(calculateWinner([])).toBe(null);
      expect(calculateWinner({})).toBe(null);
      expect(calculateWinner('string')).toBe(null);
      expect(calculateWinner(229387)).toBe(null);
    })
  });
});