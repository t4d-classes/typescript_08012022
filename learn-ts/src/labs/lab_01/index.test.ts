import {add, subtract} from './index';

describe('Given a function add', () => {
  describe('When there are two numbers defined', () => {

    const a = 1;
    const b = 2;

    test('Then I expect add to return their sum', () => {
      const result = add(a, b);
      expect(result).toBe(3);
    });

    test('Then I expect subtract to return their difference', () => {
      const result: number = subtract(a, b);
      expect(result).toBe(-1);
    });


  });
});
