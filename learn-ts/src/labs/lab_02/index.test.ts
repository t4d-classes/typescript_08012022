// add code import here

import {printCar, copyCar, Car} from './index';

describe('Given a car', () => {
  // add car initialization code here
  const car: Car = {
    id: 1,
    make: 'Ford',
    model: 'Fusion',
    year: 2020,
    color: 'blue',
    price: 20000,
    hasTowHitch: true,
  };

  describe('When the function car info is called', () => {
    test('Then I expect to received a car info string', () => {
      const result = printCar(car);

      // for primitive values `toBe` and `toEqual` do the same thing

      expect(result).toBe(
        `ID: 1, Make: Ford, Model: Fusion, Year: 2020, Color: blue, Price: 20000, Has Tow Hitch: true`,
      );

      expect(result).toEqual(
        `ID: 1, Make: Ford, Model: Fusion, Year: 2020, Color: blue, Price: 20000, Has Tow Hitch: true`,
      );
    });
  });

  describe('When the function car copy is called', () => {
    test('Then I expect to the copied car to match the original car', () => {
      const result = copyCar(car);

      // for objects `toBe` and `toEqual` do not do the same thing
      // `toBe` compares memory addresses
      // `toEqual` does a deep comparison

      // expect(result).toBe(car);

      expect(result).toEqual(car);
    });
  });
});
