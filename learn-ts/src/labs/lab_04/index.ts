const product1 = {
  id: 1,
  name: 'widget',
  size: 'large',
  qty: 10,
  price: 12.34,
};

const product2 = {
  id: 2,
  name: 'thingy',
  size: 'small',
  qty: 3,
  price: 34.12,
};

const product3 = {
  id: 3,
  name: 'gizmo',
  size: 'small',
  qty: 5,
  price: 23.45,
};

const products = [product1, product2, product3];

const addProduct = (products, newProduct) => {
  return [...products, {
    ...newProduct,
    id: Math.max(...products.map(product => product.id)) + 1,
  }];
}

addProduct(products, {name: 'contraption', size: 'medium', qty: 9, price: 87.34});

products.forEach(product => console.log(product.id, product.name));
