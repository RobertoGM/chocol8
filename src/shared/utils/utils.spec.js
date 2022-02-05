import { splitLines } from '../../shared/utils';

describe('Util functions', () => {
  describe('splitLines ', () => {
    it('should split into 2 lines if the value is longer than the limit', () => {
      const value = 'text that is longer than the limit';
      const prevVal = 'text that is longer than the limi';
      const maxLength = '20';
      const maxLines = '3';

      expect(splitLines(value, prevVal, maxLength, maxLines)).toMatch(
        'text that is longer \nthan the limit'
      );
    });

    it('should not allow more than the limit of lines', () => {
      const value = 'text that is longer than the limit';
      const prevVal = 'text that is longer than the limi';
      const maxLength = '3';
      const maxLines = '2';

      expect(splitLines(value, prevVal, maxLength, maxLines)).toMatch(
        'tex\nt t'
      );
    });

    it('should not add a new line when backspacing the last character of a line', () => {
      const value = 'text ';
      const prevVal = 'text \n';
      const maxLength = '5';
      const maxLines = '2';

      expect(splitLines(value, prevVal, maxLength, maxLines)).toMatch('text ');
    });
  });
});
