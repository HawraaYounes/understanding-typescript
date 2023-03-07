//Video 162: Using JavaScript (!) Libraries with TypeScript
import _ from 'lodash';
console.log(_.shuffle([1,2,3]));

//Video 164: No Types Needed: class-transformer
import 'reflect-metadata';
import { plainToClass } from 'class-transformer';
import { Product } from './product.model';

const products = [
  { title: 'A Carpet', price: 29.99 },
  { title: 'A Book', price: 10.99 }
];

const loadedProducts = plainToClass(Product, products);

for (const prod of loadedProducts) {
  console.log(prod.getInformation());
}
