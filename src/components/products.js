import { restaurants } from '../fixtures';

const products = [];
for (let i = 0; i < restaurants.length; i++) {
  products.push(...restaurants[i].menu);
}

export default products;
