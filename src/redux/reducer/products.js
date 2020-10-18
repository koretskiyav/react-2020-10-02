import { normalizedProducts } from '../../fixtures';

// { [productId]: product }

const defaultProducts = normalizedProducts.reduce(
  (acc, product) => ({ ...acc, [product.id]: product }),
  {}
);

export default (products = defaultProducts, action) => {
  const { type } = action;

  switch (type) {
    default:
      return products;
  }
};
