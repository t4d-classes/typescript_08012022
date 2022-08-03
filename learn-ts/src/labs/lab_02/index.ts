// add code here...

export type Car = {
  id: number;
  make: string;
  model: string;
  year: number;
  color: string;
  price: number;
  hasTowHitch: boolean;
};

export interface Car2 {
  id: number;
  make: string;
  model: string;
  year: number;
  color: string;
  price: number;
  hasTowHitch: boolean;
}

export class Car3 {
  id!: number;
  make!: string;
  model!: string;
  year!: number;
  color!: string;
  price!: number;
  hasTowHitch!: boolean;
}

export function printCar(car: Car) {
  return `ID: ${car.id}, Make: ${car.make}, Model: ${car.model}, Year: ${car.year}, Color: ${car.color}, Price: ${car.price}, Has Tow Hitch: ${car.hasTowHitch}`;
}

export function copyCar(car: Car) {
  return {
    ...car,
  };
}
