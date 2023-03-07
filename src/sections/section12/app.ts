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

//Video 165: TypeScript-embracing: class-validator
import { validate } from 'class-validator';
const newProd = new Product('', -5.99);// VALIDATION ERRORS!
validate(newProd).then(errors => {
  if (errors.length > 0) {
    console.log('VALIDATION ERRORS!');
    console.log(errors);
  } else {
    console.log(newProd.getInformation());
  }
});
