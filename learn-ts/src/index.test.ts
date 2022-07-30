import {echo} from 'index';

describe('Given a function echo', () => {
  describe('When the input text is Hello World', () => {
    const inputText = 'Hello World';

    test('Then I expect it to return Hello World', () => {
      const result = echo(inputText);
      expect(result).toBe(inputText);
    });
  });
});
