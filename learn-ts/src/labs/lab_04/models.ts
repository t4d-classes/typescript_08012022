

export type Product = {
  id: number;
  name: string;
  size: 'small' | 'medium' | 'large',
  qty: number,
  price: number,
};

// export type NewProduct = {
//   name: string;
//   size: 'small' | 'medium' | 'large',
//   qty: number,
//   price: number,
// };

export type NewProduct = Omit<Product, 'id'>;
